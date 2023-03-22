import { Group, ActionIcon, Avatar, Badge, Text } from '@mantine/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AiFillLike, AiTwotoneMessage } from 'react-icons/ai';
import { TbPinnedFilled } from 'react-icons/tb';

dayjs.extend(relativeTime);

interface BlogCommentProps {
  content: string;
  username: string;
  userProfileUrl: string;
  likes: number;
  liked?: boolean;
  pinned?: boolean;
  commentedOn: string;
}

const BlogComment = (props: BlogCommentProps) => {
  const { content, likes, pinned, username, userProfileUrl, liked } = props;

  return (
    <Group spacing={'0.75rem'} align="flex-start" noWrap>
      <div>
        <Avatar src={userProfileUrl} alt="user-image" radius={'xl'} size={'sm'} />
      </div>
      <div
        style={{
          marginBottom: '1rem',
        }}
      >
        <Group spacing={4}>
          <Text span color="gray.1" weight={'bold'} size={'sm'}>
            {username}
          </Text>
          <Text span color="gray.6" size={'sm'}>
            {dayjs(props.commentedOn).fromNow()}
          </Text>
          {pinned && (
            <Badge color="gray.7" size="sm" radius="xs">
              <Group spacing={0}>
                <TbPinnedFilled />
                <Text>Pinned</Text>
              </Group>
            </Badge>
          )}
        </Group>
        <Text component="p" size={'sm'} color="gray.2">
          {content}
        </Text>
        <Group spacing={'1rem'}>
          <Group spacing={0}>
            <ActionIcon variant="transparent" color={liked ? 'cyan.8' : 'white'}>
              <AiFillLike color={liked ? 'cyan.8' : 'white'} />
            </ActionIcon>
            <Text span size={'sm'} color={liked ? 'cyan.8' : 'gray.2'}>
              {likes}
            </Text>
          </Group>
          <Group spacing={0}>
            <ActionIcon variant="transparent">
              <AiTwotoneMessage color="white" />
            </ActionIcon>
            <Text span size={'sm'} color="gray.2">
              Reply
            </Text>
          </Group>
        </Group>
      </div>
    </Group>
  );
};

export default BlogComment;
