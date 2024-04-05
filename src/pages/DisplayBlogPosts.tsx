// components/DisplayBlogPosts.tsx
import React, { useState, useEffect } from 'react';

interface BlogPost {
    id: number;
    title: string;
    content: string;
    created_at: string;
    image_url: string; // This now contains the base64-encoded image
}

const DisplayBlogPosts: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/get-posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    {post.image_url && <img src={post.image_url} alt={post.title} style={{ maxWidth: '100%' }} />}
                    <p>{post.content}</p>
                    <span>Posted on: {new Date(post.created_at).toLocaleDateString()}</span>
                </div>
            ))}
        </div>
    );
};

export default DisplayBlogPosts;
