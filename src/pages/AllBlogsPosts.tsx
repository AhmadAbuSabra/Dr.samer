import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Define your interfaces for type safety
interface BlogPostPreview {
  id: number;
  title: string;
  image_url: string;
}

// Main component
const AllBlogsPosts = () => {
  const [posts, setPosts] = useState<BlogPostPreview[]>([]);

  useEffect(() => {
    // Fetch the latest blog posts
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get-all-posts');
        const data: BlogPostPreview[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('There was an error fetching the blog posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {posts.map((post) => (
          <div className="col-12 col-md-4 mb-4" key={post.id}>
            <Link href={`/blogs/${post.id}`} passHref>
              <div className="card h-100 shadow-sm">
                <img src={post.image_url} className="card-img-top" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title text-center">{post.title}</h5>
                </div>
                <div className="card-footer bg-white border-top-0">
                  <div className="text-center">
                  <button style={{ backgroundColor: '#353929', color: '#ffffff', borderColor: '#353929', borderWidth: '1px', borderStyle: 'solid', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }} className="btn btn-primary">
                      تفاصيل</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPosts;
