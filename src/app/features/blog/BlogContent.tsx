import { Group, ActionIcon, Divider, Text } from '@mantine/core';
import { AiFillLike, AiOutlineStop } from 'react-icons/ai';

interface BlogContentProps {
  videoUrl: string;
  content: string;
  likes: number;
}

const BlogContent = (props: BlogContentProps) => {
  const { content, likes, videoUrl } = props;

  return (
    <>
      <div>
        <video
          style={{
            width: '100%',
          }}
          height={300}
          src={videoUrl}
          id="video"
          controls
        />
      </div>
      <Text component="p" color="gray.1" size={'md'}>
        {content}
      </Text>
      <Divider color="gray.8" my={'1rem'} />
      <Group mb={'3rem'}>
        <Group spacing={0}>
          <ActionIcon variant="transparent">
            <AiFillLike color="white" />
          </ActionIcon>
          <Text span color="gray.2" size={'sm'}>
            {likes}
          </Text>
        </Group>
        <Group spacing={0}>
          <ActionIcon variant="transparent">
            <AiOutlineStop color="white" />
          </ActionIcon>
          <Text span color="gray.2" size={'sm'}>
            Show less like this
          </Text>
        </Group>
      </Group>
    </>
  );
};

export default BlogContent;
