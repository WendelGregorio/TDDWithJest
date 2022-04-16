const express = require('express');

class AppController{
    constructor(){
        this.express = express()
        
        this.middlewares();
        this.routes();
    };

    middlewares(){
        this.express.user(express.json());
    }

    routes(){
        this.express.use('./routes');
    }
};

module.exports = new AppController().express;