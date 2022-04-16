const routes = require('express').Router();
const { User } = require('./app/models')

User.create({name: 'Wendel', email: 'wendel@email.com', password_hash: '123456'});

module.exports = routes;