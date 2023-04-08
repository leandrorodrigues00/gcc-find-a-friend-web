import React, { useState } from 'react'
import Files from 'react-files'

export const FileDropzone = () => {
  const [files, setFiles] = useState([])

  const handleChange = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles])
    console.log(files)
  }

  const handleFileRemove = (fileId) => {
    setFiles((prevFiles) =>
      prevFiles.filter((prevFile) => prevFile.id !== fileId),
    )
  }

  const handleClearFiles = () => {
    setFiles([])
  }

  const handleError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  }

  return (
    <div className="files">
      <Files
        className="files-dropzone-list"
        dragActiveClassName="files-dropzone-active"
        style={{ height: '100px' }}
        onChange={handleChange}
        multiple
        maxFiles={6}
        maxFileSize={10000000}
        minFileSize={0}
        clickable
      >
        Drop files here or click to upload
      </Files>

      {files.length > 0 && (
        <div className="files-list">
          <ul>
            {files.map((file) => (
              <li key={file.id} className="files-list-item">
                <div className="files-list-item-content">
                  <div className="files-list-item-content-item files-list-item-content-item-1">
                    {file.name}
                  </div>
                </div>

                <button onClick={() => handleFileRemove(file.id)}>teste</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
