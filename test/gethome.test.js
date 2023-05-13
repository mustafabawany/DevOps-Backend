const request = require('supertest');
const { app, posts } = require('../app');
const { expect } = require('chai');

describe('GET /', () => {
    it('should return starting content and posts in JSON format', async () => {
        const response = await request(app).get('/');
        expect(response.status).to.equal(200);
        expect(response.type).to.equal('application/json');
        expect(response.body).to.have.property('startingContent');
        expect(response.body).to.have.property('posts');
    });
});
