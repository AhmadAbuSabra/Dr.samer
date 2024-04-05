import React from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import styled from 'styled-components';

// Define the styles for your dropzone container
const StyledDropzone = styled.div<{ isDragActive: boolean }>`
  border: 2px dashed #007bff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  color: ${props => (props.isDragActive ? '#2196f3' : '#007bff')};
  transition: border-color 0.3s;

  &:hover {
    border-color: #0056b3;
  }
`;

// Props type definition for the FileUpload component
interface FileUploadProps {
  onFilesAccepted: (acceptedFiles: File[]) => void;
}

// FileUpload component using react-dropzone
const FileUpload: React.FC<FileUploadProps> = ({ onFilesAccepted }) => {
  // Define the onDrop function, which uses the onFilesAccepted callback
  const onDrop = (acceptedFiles: File[]) => {
    onFilesAccepted(acceptedFiles);
  };

  // Define the options for useDropzone, including the onDrop function
  const dropzoneOptions: DropzoneOptions = { onDrop };

  // Initialize the dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions);

  return (
    <StyledDropzone {...getRootProps()} isDragActive={isDragActive}>
      <input {...getInputProps()} />
      <p>{isDragActive ? 'Drop the files here ...' : 'Drag \'n\' drop some files here, or click to select files'}</p>
    </StyledDropzone>
  );
};

export default FileUpload;
