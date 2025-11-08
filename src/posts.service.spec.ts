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
    const newPost = postsService.create({text: 'New post'});
    const posts = postsService.getPosts();
    
    expect(newPost).toHaveProperty('id');
    expect(newPost).toHaveProperty('date');
    expect(newPost.text).toBe('New post');
    expect(posts).toContainEqual(newPost);
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const createdPost = postsService.create({text: 'New post'});
    const foundPost = postsService.find(createdPost.id);
    expect(foundPost).toEqual(createdPost);
  });
});