const request = require('supertest');
const app = require('./app');

it("Should do the GET request", () => {
    return request(app)
        .get('/')
        .then((response) => {
            expect(response.statusCode).toBe(200);
        });
});

it("Should create a new user", () => {
    return request(app)
        .post('/users')
        .then((response) => {
            expect(response.statusCode).toBe(200);
        })   
})