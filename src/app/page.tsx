'use client';

import { Container, Grid, Title } from '@mantine/core';

import BlogSuggestion from './features/blog/BlogSuggestion';
import BlogHeader from './features/blog/BlogHeader';
import BlogContent from './features/blog/BlogContent';
import { useEffect, useState } from 'react';
import BlogCommentSection from './features/blog/BlogCommentSection';

const mockBlogSuggestions = [
  {
    title: 'The Mental Health Impacts of the Way We Live',
    topic: 'Mental Health',
    likes: 100,
    comments: 200,
    thumbnail: 'https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg',
  },
  {
    title: 'The Mental Health Impacts of the Way We Live',
    topic: 'Mental Health',
    likes: 100,
    comments: 200,
    thumbnail: 'https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg',
  },
  {
    title: 'The Mental Health Impacts of the Way We Live',
    topic: 'Mental Health',
    likes: 100,
    comments: 200,
    thumbnail: 'https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg',
  },
  {
    title: 'The Mental Health Impacts of the Way We Live',
    topic: 'Mental Health',
    likes: 100,
    comments: 200,
    thumbnail: 'https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg',
  },
];

export default function Home() {
  const [blog, setBlog] = useState<any>(undefined);

  const fetchBlog = async () => {
    return await fetch('/api/blog', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <Container
      className="container"
      style={{
        backgroundColor: '#111111',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
      px={'4rem'}
      py={'2rem'}
    >
      {blog ? (
        <Grid>
          <Grid.Col xs={12} sm={8} id="content-section">
            {/* Left Section */}
            <BlogHeader
              createdOn={blog?.createdOn}
              title={blog?.title}
              topic={blog?.topic}
              username={blog?.user?.username}
            />
            <BlogContent videoUrl={blog?.content.videoUrl} content={blog?.content.text} likes={20} />
            <BlogCommentSection />
          </Grid.Col>
          <BlogSuggestion items={mockBlogSuggestions} />
        </Grid>
      ) : (
        <div>
          <Title order={1} color="white">
            Loading...
          </Title>
        </div>
      )}
    </Container>
  );
}
