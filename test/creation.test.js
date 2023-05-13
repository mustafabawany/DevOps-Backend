const request = require('supertest');
const { app, posts } = require('../app');
const { expect } = require('chai');

describe('POST /compose', () => {
  it('should create a new post and return 200', async () => {
    const postTitle = 'New Post';
    const postBody = 'This is a new post';

    const response = await request(app)
      .post('/compose?postTitle=' + encodeURIComponent(postTitle) + '&postBody=' + encodeURIComponent(postBody));

    expect(response.status).to.equal(200);

    // Check if the post was created
    expect(posts.length).to.equal(1);
    expect(posts[0].title).to.equal(postTitle);
    expect(posts[0].content).to.equal(postBody);
  });
});
