import React, { useState } from 'react';
import FileUpload from './FileUpload'; // Adjust the path as needed
import FileList from './FileList'; // Adjust the path as needed
import styled from 'styled-components';

const AttachmentContainer = styled.div`
  padding: 20px;
`;

const AttachmentManagement: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);


  const onFilesAccepted = (newFiles: File[]) => {
    console.log('Accepted files:', newFiles);

    // Assuming newFiles contains only one file for upload
    // and you're interested in uploading just the first one
    const formData = new FormData();
    if (newFiles.length > 0) {
        // Append only the first file if multiple files are selected
        formData.append('file', newFiles[0]); // Use 'file' to match server expectation for a single file
    }

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Handle the response data
      // Assuming `setFiles` updates the component's state with the new list of files
      // Update accordingly if you're handling the state differently
      setFiles(currentFiles => [...currentFiles, newFiles[0]]);
    })
    .catch(error => console.error('Error:', error));
};


  const onRemoveFile = (fileToRemove: File) => {
    // Here, you would typically handle the file removal process
    // Example: DELETE request to your '/api/remove' endpoint

    console.log('fileToRemove');
    console.log(fileToRemove);
    fetch('/api/remove', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileName: fileToRemove.name }), // Adjust according to your API
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Handle the response
      setFiles(currentFiles => currentFiles.filter(file => file !== fileToRemove)); // Update the state
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <AttachmentContainer>
      <FileUpload onFilesAccepted={onFilesAccepted} />
      {/* <FileList files={files} onRemoveFile={onRemoveFile} /> */}
      <FileList
  files={files.map(file => ({ file_name: file.name /*, other properties */ }))}
  onRemoveFile={fileName => onRemoveFile(new File([], fileName))}
/>
    </AttachmentContainer>
  );
};

export default AttachmentManagement;
