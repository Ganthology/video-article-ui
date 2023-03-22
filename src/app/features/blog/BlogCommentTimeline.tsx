import { Timeline, Group, ActionIcon, Avatar, Badge, Text } from '@mantine/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AiFillLike, AiTwotoneMessage } from 'react-icons/ai';
import { TbPinnedFilled } from 'react-icons/tb';

dayjs.extend(relativeTime);

type BlogContent = {
  content: string;
  username: string;
  likes: number;
  liked?: boolean;
  pinned?: boolean;
  commentedOn: string;
};

interface BlogCommentTimelineProps {
  items: BlogContent[];
}

const BlogCommentTimeline = (props: BlogCommentTimelineProps) => {
  const { items } = props;

  return (
    <Timeline mt={'1rem'} ml={'1rem'} mr={'1rem'} lineWidth={2} color="dark">
      {items.map((item) => (
        <Timeline.Item bullet={<Avatar src="" alt="user-image" radius={'xl'} size={'sm'} />} key={item.commentedOn}>
          <Group spacing={'0.75rem'} align="flex-start" noWrap>
            <div
              style={{
                marginBottom: '1rem',
              }}
            >
              <Group spacing={4}>
                <Text span color="gray.1" weight={'bold'} size={'sm'}>
                  {item.username}
                </Text>
                <Text span color="gray.6" size={'sm'}>
                  {dayjs(item.commentedOn).fromNow()}
                </Text>
                {item.pinned && (
                  <Badge color="gray.7" size="sm" radius="xs">
                    <Group spacing={0}>
                      <TbPinnedFilled />
                      <Text>Pinned</Text>
                    </Group>
                  </Badge>
                )}
              </Group>
              <Text component="p" size={'sm'} color="gray.2">
                {item.content}
              </Text>
              <Group spacing={'1rem'}>
                <Group spacing={0}>
                  <ActionIcon variant="transparent" color={item.liked ? 'cyan.8' : 'white'}>
                    <AiFillLike color={item.liked ? 'cyan.8' : 'white'} />
                  </ActionIcon>
                  <Text span size={'sm'} color={item.liked ? 'cyan.8' : 'gray.2'}>
                    {item.likes || '0'}
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
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default BlogCommentTimeline;
