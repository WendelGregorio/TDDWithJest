const request = require('supertest');
const app = require('../../src/app');
const { User } = require('../../src/app/models')

const truncate = require('../utils/truncate')

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should authtenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Wendel',
            email: 'wendel@email2.com',
            password: '1234567'
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '1234567'
            })

        expect(response.status).toBe(200);
    });

    it('should not authtenticate with invalid credentials', async () => {
        const user = await User.create({
            name: 'Wendel',
            email: 'wendel@email2.com',
            password: '1234567'
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '123123'
            })

        expect(response.status).toBe(401);
    });

    it('should return JWT Token when authenticated', async () => {
        const user = await User.create({
            name: 'Wendel',
            email: 'wendel@email2.com',
            password: '1234567'
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '1234567'
            })

        expect(response.body).toHaveProperty('token');
    });

});