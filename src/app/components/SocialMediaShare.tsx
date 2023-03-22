import { Group, ActionIcon, Text } from '@mantine/core';
import { AiFillLinkedin, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';

const SocialMediaShare = () => {
  return (
    <Group spacing={0}>
      <Text span color="gray.1" size={'xs'}>
        Share it
      </Text>
      <ActionIcon variant="transparent">
        <AiFillLinkedin color="white" />
      </ActionIcon>
      <ActionIcon variant="transparent">
        <AiFillTwitterSquare color="white" />
      </ActionIcon>
      <ActionIcon variant="transparent">
        <AiFillFacebook color="white" />
      </ActionIcon>
      <ActionIcon variant="transparent">
        <BsLink45Deg color="white" />
      </ActionIcon>
    </Group>
  );
};

export default SocialMediaShare;
