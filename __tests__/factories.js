const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define('User', User, {
    name: 'Wendel',
    email: 'wendel@email.com',
    password: '123456'
});

module.exports = factory