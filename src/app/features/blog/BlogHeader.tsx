import { Flex, Group, ActionIcon, Text, Avatar } from '@mantine/core';
import { AiFillLinkedin, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import SocialMediaShare from '@/app/components/SocialMediaShare';
dayjs.extend(relativeTime);

interface BlogHeaderProps {
  username: string;
  userProfileUrl: string;
  topic: string;
  title: string;
  createdOn: string;
}

const BlogHeader = (props: BlogHeaderProps) => {
  const { username, userProfileUrl, topic, title, createdOn } = props;
  return (
    <>
      <Text component="h2" color="pink" size={'xs'} mt={0} mb={'0.5rem'}>
        {topic}
      </Text>
      <Text component="h1" color="white" size={'xl'} mt={0} mb={'0.5rem'} inline>
        {title}
      </Text>
      <Flex
        direction={{ base: 'column', xs: 'row', sm: 'row', md: 'row', lg: 'row' }}
        justify={{ xs: 'space-between' }}
        mt={'1rem'}
        mb={{
          base: '1rem',
          sm: '2rem',
        }}
      >
        {/* info bar */}
        <Group spacing={8}>
          <Avatar src={userProfileUrl} alt="user-image" radius={'xl'} size={'sm'} />
          <Group spacing={4}>
            <Text span color="gray.1" size={'xs'}>
              {username}
            </Text>
            <Text span color="gray.6" size={'xs'}>
              {dayjs(createdOn).fromNow()}
            </Text>
          </Group>
        </Group>
        <SocialMediaShare />
      </Flex>
    </>
  );
};
export default BlogHeader;
