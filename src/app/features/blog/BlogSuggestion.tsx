import { Text, Image, Divider, Grid, Group, ActionIcon, Flex } from '@mantine/core';
import { AiFillLike, AiTwotoneMessage } from 'react-icons/ai';

type BlogSuggestion = {
  title: string;
  topic: string;
  likes: number;
  comments: number;
  thumbnail: string;
};
interface BlogSuggestionProps {
  items: BlogSuggestion[];
}
const BlogSuggestion = (props: BlogSuggestionProps) => {
  const { items } = props;

  return (
    <Grid.Col xs={12} sm={4}>
      <Text component="h4" size={'sm'} color="gray.2" my={0}>
        FOR YOU
      </Text>
      <Divider color="gray.8" mt={'0.5rem'} mb={'1rem'} />
      {items.map((item, index) => (
        <div key={item.title}>
          <Grid justify={'flex-start'}>
            <Grid.Col span={6}>
              <Image
                src={item.thumbnail}
                alt="image"
                style={{
                  width: '100%',
                }}
                mr={'0.25rem'}
                fit="cover"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Text component="h5" size={'xs'} color="pink" my={0} inline>
                Purpose
              </Text>
              <Text component="h3" size={'sm'} color="gray.2" my={0}>
                Real people, real stories#29
              </Text>
              <Group spacing={4}>
                <Group spacing={0}>
                  <ActionIcon variant="transparent" color="gray.4">
                    <AiFillLike color="gray.4" />
                  </ActionIcon>
                  <Text span color="gray.4" size={'sm'}>
                    20
                  </Text>
                </Group>
                <Group spacing={0}>
                  <ActionIcon variant="transparent" color="gray.4">
                    <AiTwotoneMessage color="gray.4" />
                  </ActionIcon>
                  <Text span color="gray.4" size={'sm'}>
                    180
                  </Text>
                </Group>
              </Group>
            </Grid.Col>
          </Grid>
          {index !== items.length - 1 && <Divider color="gray.8" mt={'0.5rem'} mb={'1rem'} />}
        </div>
      ))}
    </Grid.Col>
  );
};

export default BlogSuggestion;
