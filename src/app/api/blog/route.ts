export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      title: 'My first blog post',
      topic: 'Next.js',
      content: {
        videoUrl: 'https://www.youtube.com/watch?v=Qw9zlE3t8Ko',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      createdOn: new Date('2023-03-20').toISOString(),
      likes: 100,
      user: {
        username: 'johndoe',
      },
    }),
  );
}
