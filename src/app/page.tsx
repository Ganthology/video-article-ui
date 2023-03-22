'use client';

import { Container, Grid, Title } from '@mantine/core';

import './page.module.css';
import BlogSuggestion from './features/blog/BlogSuggestion';
import BlogHeader from './features/blog/BlogHeader';
import BlogContent from './features/blog/BlogContent';
import { useEffect, useState } from 'react';
import BlogCommentSection from './features/blog/BlogCommentSection';

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
      }}
      px={'4rem'}
      py={'2rem'}
    >
      {blog ? (
        <Grid>
          <Grid.Col span={8} id="content-section">
            {/* Left Section */}
            <BlogHeader
              createdOn="2023-02-01"
              title="The Mental Health Impacts of the Way We Live"
              topic="Mental Health"
              username={blog?.user?.username}
            />
            <BlogContent
              videoUrl="https://www.youtube.com/watch?v=QRZ_l7cVzzU"
              content="In the post-pandemic era, there is a growing recognition that global health is a shared responsibility that
        requires collaboration and solidarity across nations. Businesses have an important role to play in promoting
        global health by investing in sustainable healthcare systems, supporting research and development of new
        treatments and vaccines, and advocating for policies that promote health equity and access to healthcare."
              likes={20}
            />
            <BlogCommentSection />
          </Grid.Col>
          <BlogSuggestion
            items={[
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
            ]}
          />
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
