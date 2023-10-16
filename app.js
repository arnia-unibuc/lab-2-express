const express = require('express');
const models = require('./models');

const app = express();

app.get('/', async (req, res) => {
    const users = await models.User.findAll();
    res.send(users);
});

app.post('/users', async (req, res) => {
    const user = await models.User.create({
        name:"Gogu",
        email:"Borala@test.com"
    });

    res.send('ok');
})

module.exports = app;