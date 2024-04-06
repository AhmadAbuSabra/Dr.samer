// // import React from 'react';
// // import styled from 'styled-components';

// // const ListContainer = styled.div`
// //   margin-top: 20px;
// // `;

// // const FileItem = styled.div`
// //   background: #f3f3f3;
// //   margin-bottom: 8px;
// //   padding: 10px;
// //   border-radius: 5px;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// // `;

// // const FileName = styled.span`
// //   margin-right: 20px;
// // `;

// // const RemoveButton = styled.button`
// //   background: #ff1744;
// //   color: white;
// //   border: none;
// //   border-radius: 5px;
// //   padding: 5px 10px;
// //   cursor: pointer;
// // `;

// // // Define the props type for the FileList component
// // interface FileListProps {
// //   files: File[];
// //   onRemoveFile: (file: File) => void;
// // }

// // const FileList: React.FC<FileListProps> = ({ files, onRemoveFile }) => {
// //     console.log('Files to display:', files);

// //   return (
// //     <ListContainer>
// //       {files.map((file, index) => (
// //         <FileItem key={index}>
// //           <FileName>{file.name}</FileName>
// //           <RemoveButton onClick={() => onRemoveFile(file)}>Remove</RemoveButton>
// //         </FileItem>
// //       ))}
// //     </ListContainer>
// //   );
// // };

// // export default FileList;


// // import React, { useEffect, useState } from 'react';
// // import styled from 'styled-components';
// // import axios from 'axios';

// // // Styled components for the list
// // const ListContainer = styled.div`
// //   margin-top: 20px;
// // `;

// // const FileItem = styled.div`
// //   background: #f3f3f3;
// //   margin-bottom: 8px;
// //   padding: 10px;
// //   border-radius: 5px;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// // `;

// // const FileName = styled.span`
// //   margin-right: 20px;
// //   color: blue;
// //   cursor: pointer;
// //   &:hover {
// //     text-decoration: underline;
// //   }
// // `;

// // const RemoveButton = styled.button`
// //   background: #ff1744;
// //   color: white;
// //   border: none;
// //   border-radius: 5px;
// //   padding: 5px 10px;
// //   cursor: pointer;
// // `;

// // // FileList component
// // const FileList: React.FC = () => {
// //   const [files, setFiles] = useState([]);

// //   useEffect(() => {
// //     // Fetch files from the server
// //     const fetchFiles = async () => {
// //       try {
// //         const response = await axios.get('/api/files');
// //         setFiles(response.data);
// //       } catch (error) {
// //         console.error('Error fetching files:', error);
// //       }
// //     };

// //     fetchFiles();
// //   }, []);

// //   const onRemoveFile = async (fileName: string) => {
// //     // Implement file removal logic here
// //     // For example, make an API call to delete the file from the server and then refresh the file list
// //     console.log(`Remove file: ${fileName}`);
// //     // Placeholder for actual implementation
// //   };

// //   return (
// //     <ListContainer>
// //       {files.map((file, index) => (
// //         <FileItem key={index}>
// //           <FileName>
// //             {/* Make the file name a clickable link for downloading */}
// //             <a href={`/api/download/${encodeURIComponent(file.file_name)}`} download style={{ color: 'blue', textDecoration: 'none' }}>
// //               {file.file_name}
// //             </a>
// //           </FileName>
// //           <RemoveButton onClick={() => onRemoveFile(file.file_name)}>Remove</RemoveButton>
// //         </FileItem>
// //       ))}
// //     </ListContainer>
// //   );
// // };

// // export default FileList;

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// // Styled components for the list
// const ListContainer = styled.div`
//   margin-top: 20px;
// `;

// const FileItem = styled.div`
//   background: #f3f3f3;
//   margin-bottom: 8px;
//   padding: 10px;
//   border-radius: 5px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const FileName = styled.span`
//   margin-right: 20px;
//   color: blue;
//   cursor: pointer;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const RemoveButton = styled.button`
//   background: #ff1744;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 5px 10px;
//   cursor: pointer;
// `;

// // Prop types for the FileList component
// interface FileListProps {
//   files: File[];
//   onRemoveFile: (file: File) => void;
//   patientId?: string;

// }

// const FileList: React.FC<FileListProps> = ({ patientId }) => {
//   const [files, setFiles] = useState([]);


//   useEffect(() => {
//     const fetchFiles = async () => {
//       try {
//         const response = await axios.get(`/api/files?patient_id=${patientId}`);
//         setFiles(response.data);
//       } catch (error) {
//         console.error('Error fetching files:', error);
//       }
//     };

//     fetchFiles();
//   }, [patientId]);

//   const onRemoveFile = async (fileName: string) => {
//     try {
//       const response = await axios.delete(`/api/remove`, { data: { fileName, patientId } });
//       if (response.status === 200) {
//         // Refresh the file list after removal
//         setFiles(currentFiles => currentFiles.filter(file => file.file_name !== fileName));
//       }
//     } catch (error) {
//       console.error('Error removing file:', error);
//     }
//   };

//   return (
//     <ListContainer>
//       {files.map((file, index) => (
//         <FileItem key={index}>
//           <FileName>
//             <a href={`/api/download/${encodeURIComponent(file.file_name)}?patient_id=${patientId}`} download>
//               {file.file_name}
//             </a>
//           </FileName>
//           <RemoveButton onClick={() => onRemoveFile(file.file_name)}>Remove</RemoveButton>
//         </FileItem>
//       ))}
//     </ListContainer>
//   );
// };

// export default FileList;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled components
const ListContainer = styled.div`
  margin-top: 20px;
`;

const FileItem = styled.div`
  background: #f3f3f3;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileName = styled.span`
  margin-right: 20px;
  color: blue;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const RemoveButton = styled.button`
  background: #ff1744;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

interface IFile {
  file_name: string; // Adjust based on your actual file object properties
  // Add other file properties as necessary
}

interface FileListProps {
  files: IFile[]; // Make sure this matches the state in your AttachmentManagement component.
  onRemoveFile: (fileName: string) => void; // Adjust this method to match your implementation
  patientId?: string; // If you still need patientId, keep it here.
}

const FileList: React.FC<FileListProps> = ({ patientId }) => {
  const [files, setFiles] = useState<IFile[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`/api/files?patient_id=${patientId}`);
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    if (patientId) {
      fetchFiles();
    }
  }, [patientId]); // Re-fetch files when patientId changes

  const onRemoveFile = async (fileName: string) => {
    try {
      const response = await axios.delete(`/api/remove`, { data: { fileName, patientId } });
      if (response.status === 200) {
        // Successfully removed the file, refresh the list
        setFiles(currentFiles => currentFiles.filter(file => file.file_name !== fileName));
      }
    } catch (error) {
      console.error('Error removing file:', error);
    }
  };

  return (
    <ListContainer>
      {files.map((file, index) => (
        <FileItem key={index}>
          <FileName onClick={() => window.open(`/api/download/${encodeURIComponent(file.file_name)}?patient_id=${patientId}`, '_blank')}>
            {file.file_name}
          </FileName>
          <RemoveButton onClick={() => onRemoveFile(file.file_name)}>
            Remove
          </RemoveButton>
        </FileItem>
      ))}
    </ListContainer>
  );
};

export default FileList;
