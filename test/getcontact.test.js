const request = require('supertest');
const { expect } = require('chai');
const { app } = require('../app');

describe('GET /contact', () => {
    it('should return contact content in JSON format', async () => {
        const response = await request(app).get('/contact');
        expect(response.status).to.equal(200);
        expect(response.type).to.equal('application/json');
        expect(response.body).to.have.property('contactContent');
        expect(response.body.contactContent).to.be.a('string');
    });
});
