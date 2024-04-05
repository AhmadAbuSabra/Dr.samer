// components/BlogPostDetail.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: #f0f0f0;
  padding: 40px 20px;
`;

const Image = styled.img`
  width: 80%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 15px;
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Content = styled.div`
  width: 80%;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const DatePosted = styled.span`
  color: #999;
  font-size: 0.9rem;
`;

interface BlogPost {
  id: number;
  title: string;
  content: string;
  created_at: string;
  image_url: string;
}

const BlogPostDetail: React.FC = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const response = await fetch(`/api/get-post/${id}`);
      const data = await response.json();
      setPost(data);
    };
    fetchData();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
    

    <Container>
      <Image src={post.image_url} alt={post.title} />
      <Title>{post.title}</Title>
      <Content>
        {/* <p>{post.content}</p> */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <DatePosted>Posted on: {new Date(post.created_at).toLocaleDateString()}</DatePosted>
      </Content>
    </Container>
    </>
  );
};

export default BlogPostDetail;
