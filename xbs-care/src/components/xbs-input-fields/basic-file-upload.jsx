import React, { useState } from 'react';
import '../assets/xbs-styles/styles.css';

const FileUploadComponent = ({ onFileChange, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      onFileChange && onFileChange(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileName('');
    document.getElementById('file').value = '';
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload && onUpload(selectedFile);
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div>
      <div className="file-input-container">
        <input 
          type="file" 
          id="file" 
          className="file-input" 
          onChange={handleFileChange} 
        />
        <label htmlFor="file" className="file-input-label">Choose file</label>
        {fileName && (
          <span className="file-name">{fileName}
            <button className="remove-btn" onClick={handleRemoveFile}>X</button>
          </span>
        )}
      </div>
      <button className="upload-btn" onClick={handleUpload}>Upload File</button>
    </div>
  );
};

export default FileUploadComponent;