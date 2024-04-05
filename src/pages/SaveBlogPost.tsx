// components/SaveBlogPost.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Form = styled.form`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #495057;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #80bdff;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px; /* Increased height */
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #80bdff;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const Button = styled.button`
  width: 100%; /* Full width */
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ImagePreviewContainer = styled.div`
  margin-top: 10px;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SaveBlogPost: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [imageBase64, setImageBase64] = useState<string>('');

    const router = useRouter();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('/api/save-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, image_base64: imageBase64 }),
        });
        if (response.ok) {
            console.log('Post saved successfully');
            setTitle('');
            setContent('');
            setImageBase64('');
            router.push('/MenuScreenDr'); 

        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h2 style={{ textAlign: 'center' }}>المقالات</h2>
            <FormField>
                <Label>العنوان</Label>
                <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="" />
            </FormField>
            <FormField>
                <Label>المحتوى</Label>
                <ReactQuill value={content} onChange={setContent} />

                {/* <TextArea value={content} onChange={(e) => setContent(e.target.value)} placeholder="" /> */}
            </FormField>
            <FormField>
                <Label>ارفاق صورة</Label>
                <Input type="file" onChange={handleImageChange} />
                {imageBase64 && (
                  <ImagePreviewContainer>
                    <ImagePreview src={imageBase64} alt="Preview" />
                  </ImagePreviewContainer>
                )}
            </FormField>
            <Button type="submit">حفظ</Button>
        </Form>
    );
};

export default SaveBlogPost;
