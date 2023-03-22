import { Textarea, Flex, Text, Button, Divider, Anchor } from '@mantine/core';
import BlogComment from './BlogComment';
import BlogCommentTimeline from './BlogCommentTimeline';

const mockComments = [
  {
    commentedOn: '2021-08-01T00:00:00.000Z',
    content:
      'Globalization is a multifaceted phenomenon that refers to the interconnectedness and integration of countries, economies, cultures, and people across the world. At its core, globalization is about the expansion and intensification of international trade, investment, communication, and travel, which has created a global marketplace and a global culture.',
    likes: 20,
    username: 'John Cena',
    userProfileUrl: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
  },
  {
    commentedOn: '2022-08-01T00:00:00.000Z',
    content:
      'Globalization is a multifaceted phenomenon that refers to the interconnectedness and integration of countries, economies, cultures, and people across the world. At its core, globalization is about the expansion and intensification of international trade, investment, communication, and travel, which has created a global marketplace and a global culture.',
    likes: 20,
    liked: true,
    username: 'John Cena',
    userProfileUrl: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
  },
];

const BlogCommentSection = () => {
  return (
    <section
      id="comments-section"
      style={{
        backgroundColor: '#2b2b2b',
        paddingBottom: '2rem',
      }}
    >
      <div
        style={{
          paddingTop: '1rem',
          paddingBottom: '1.5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        }}
      >
        <Text component="h2" size={'md'} mt={0} mb={'0.5rem'} color="white">
          Join the conversation
        </Text>
        <Textarea placeholder="What are your thoughts?" />
        <Flex justify={'flex-end'} my={'1rem'}>
          <Button color="pink" radius={'xl'} size="xs">
            Post
          </Button>
        </Flex>
      </div>
      <Divider color="gray.8" />
      <div
        style={{
          padding: '1rem',
        }}
      >
        <div>
          <BlogComment
            commentedOn="2021-08-01T00:00:00.000Z"
            content="Globalization is a multifaceted phenomenon that refers to the interconnectedness and integration of countries, economies, cultures, and people across the world. At its core, globalization is about the expansion and intensification of international trade, investment, communication, and travel, which has created a global marketplace and a global culture."
            likes={20}
            pinned={true}
            username="John Smith"
            userProfileUrl=""
          />
        </div>
      </div>
      <Divider color="gray.8" />
      <BlogCommentTimeline items={mockComments} />
      <Anchor onClick={() => {}} color="cyan.8" span weight={'normal'} size="sm" pl="1rem">
        Show more replies
      </Anchor>
    </section>
  );
};

export default BlogCommentSection;
