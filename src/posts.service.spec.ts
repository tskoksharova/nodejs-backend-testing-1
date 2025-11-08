import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    const createdPost = postsService.create(post);
    const posts = postsService.getPosts();
    
    expect(createdPost).toHaveProperty('id');
    expect(createdPost).toHaveProperty('date');
    expect(createdPost.text).toBe(post.text);

    expect(posts).toContainEqual(createdPost);
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const createdPost = postsService.create(post);

    const foundPost = postsService.find(createdPost.id);

    expect(foundPost).toEqual(createdPost);
  });
});