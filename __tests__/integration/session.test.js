const { User } = require('../../src/app/models')

describe('Authentication', () => {
    it('should sum two numbers', async () => {
        const user = await User.create({
            name: 'Wendel',
            email: 'wendel@email2.com',
            password_hash: '1234567'
        });

        console.log(user);

        expect(user.email).toBe('wendel@email2.com');
    });
});