import { useFormContext } from 'react-hook-form'
import { ChangeEvent, DragEvent, useEffect, useRef, useState } from 'react'

import { uploadIcon, fileIcon, xSquare } from '../../assets/icons/index'
import {
  AddElementButtonContainer,
  ImagesContainer,
  SelectedImagensContainer,
} from './styles'

export function ImageUploader() {
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { setValue } = useFormContext()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files

    if (newFiles) {
      const fileAlreadyExists = Array.from(newFiles).some((file) =>
        files.some(
          (existingFile) =>
            existingFile.name === file.name && existingFile.size === file.size,
        ),
      )

      if (!fileAlreadyExists) {
        setFiles((prevFiles) => [...prevFiles, ...newFiles])
      } else {
        console.log('Uma ou mais imagens já foram adicionadas.')
      }
    }
  }
  const handleFileRemove = (fileName: string) => {
    setFiles((prevFiles) =>
      prevFiles.filter((prevFile) => prevFile.name !== fileName),
    )
  }

  const handleAddNewImagesFromButton = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleAddNewImagesFromDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault()

    const newFiles = event.dataTransfer.files

    if (newFiles) {
      const fileAlreadyExists = Array.from(newFiles).some((file) =>
        files.some(
          (existingFile) =>
            existingFile.name === file.name && existingFile.size === file.size,
        ),
      )

      if (!fileAlreadyExists) {
        setFiles((prevFiles) => [...prevFiles, ...newFiles])
      } else {
        console.log('Uma ou mais imagens já foram adicionadas.')
      }
    }
  }

  useEffect(() => {
    setValue('images', files)
  }, [files, setValue])

  return (
    <>
      <label htmlFor="images">Fotos</label>
      <ImagesContainer>
        <input
          type="file"
          id="images"
          accept="image/*"
          max="6"
          multiple
          name="images"
          ref={fileInputRef}
          onChange={handleChange}
        />

        <label
          htmlFor="images"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => handleAddNewImagesFromDrop(event)}
        >
          <img src={uploadIcon} alt="" />
          Arraste e solte o arquivo
        </label>
      </ImagesContainer>

      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <SelectedImagensContainer key={index}>
              <div>
                <img src={fileIcon} alt="" />
                {file.name}
              </div>
              <img
                src={xSquare}
                alt={`Botão para remover a imagem ${file.name}`}
                onClick={() => handleFileRemove(file.name)}
              />
            </SelectedImagensContainer>
          ))}
        </ul>
      )}

      <AddElementButtonContainer
        type="button"
        onClick={handleAddNewImagesFromButton}
        aria-label="Adicionar nova imagem"
        title="Clique aqui para adicionar uma nova imagem"
      >
        +
      </AddElementButtonContainer>
    </>
  )
}
