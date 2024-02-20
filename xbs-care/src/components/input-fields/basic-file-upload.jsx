import React, { useState } from 'react';

const FileUploadComponent = ({ onFileChange, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileChange && onFileChange(file);
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
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploadComponent;
