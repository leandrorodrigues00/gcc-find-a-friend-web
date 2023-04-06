import React, { ChangeEvent, useRef, useState } from 'react'
import { uploadIcon, fileIcon, xSquare } from '../../assets/icons/index'

import {
  AddElementButtonContainer,
  ImagesContainer,
  SelectedImagensContainer,
} from './styles'

export function ImageUploader() {
  const [fileNames, setFileNames] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files
    if (newFiles && newFiles.length > 0) {
      const newFileNames = addFileNames(newFiles)
      setFileNames(newFileNames)
    }
  }

  const addFileNames = (newFiles: FileList) => {
    const newFileNames = [...fileNames]
    for (
      let i = 0;
      i < Math.min(newFiles.length, 6 - newFileNames.length);
      i++
    ) {
      const file = newFiles[i]
      // if (file.size <= 10485760) {
      newFileNames.push(file.name)
      // }
    }
    return newFileNames
  }

  const handleFileDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    const newFiles = event.dataTransfer.files
    if (newFiles.length > 0) {
      const newFileNames = [...fileNames]
      for (
        let i = 0;
        i < Math.min(newFiles.length, 6 - newFileNames.length);
        i++
      ) {
        newFileNames.push(newFiles[i].name)
      }
      setFileNames(newFileNames)
    }
  }

  const removeFileName = (index: number) => {
    const newFileNames = [...fileNames]
    newFileNames.splice(index, 1)
    setFileNames(newFileNames)
  }

  const handleAddImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <>
      <label htmlFor="images">Fotos</label>
      <ImagesContainer>
        <input
          type="file"
          ref={fileInputRef}
          id="images"
          onChange={handleFileInputChange}
          accept="image/*"
          max="6"
        />

        <label
          htmlFor="images"
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleFileDrop}
        >
          <img src={uploadIcon} alt="" />
          Arraste e solte o arquivo
        </label>
      </ImagesContainer>

      {fileNames.map((fileName, index) => (
        <SelectedImagensContainer key={index}>
          <div>
            <img src={fileIcon} alt="" />
            {fileName}
          </div>
          <img src={xSquare} alt="" onClick={() => removeFileName(index)} />
        </SelectedImagensContainer>
      ))}

      {fileNames.length >= 6 ? null : (
        <AddElementButtonContainer onClick={handleAddImage}>
          +
        </AddElementButtonContainer>
      )}
    </>
  )
}
