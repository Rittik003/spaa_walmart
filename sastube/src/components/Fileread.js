import React, { useState } from 'react';


export default function Fileread(props) {
  
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.log('No file selected.');
      props.reset();
      return;
    }

    const formData = new FormData();
    formData.append('myfile', selectedFile);
     console.log(formData);
    props.reset();
  };

  return (
    <div className="upload-container">
    <div className="load">
      <input type="file" accept='image/*' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  </div>
  );
};
