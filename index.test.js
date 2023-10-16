const request = require('supertest');
const app = require('./app');
const fs = require('fs');

describe('E1', () => {
    it("Should have all the routes declared", () => {
        const server = request(app)
    
        return Promise.all([
            server.get('/chat-log').then(response => expect(response.statusCode).toBe(200)),
            server.get('/history/123').then(response => expect(response.statusCode).toBe(200)),
            server.post('/new-message').then(response => expect(response.statusCode).toBe(200))
        ]);
    });
})

describe('E2', () => {
    test("Should retrieve all the messages in the history.txt file", () => {
        const server = request(app);
        return server
            .get('/chat-log')
            .then(response => {
                const body = response.body;
                const numberOfMessages = fs
                    .readFileSync('./history.txt')
                    .toString()
                    .split('\n')
                    .filter(message => !!message).length;
    
                expect(body.data.length).toBe(numberOfMessages)
                expect(response.statusCode).toBe(200)
    
            })
    });
});

describe('E3', () => {
    test("Should retrieve all messages in the history.txt file for one user only", () => {
        const server = request(app);
        return server
            .get('/history/7342')
            .then(response => {
                const messages = response.body.data;
                const allMessagesContainOnlyOneUser = messages.every((message) => message.userId === "7342")
                expect(messages.length).toBeGreaterThan(0);
                expect(allMessagesContainOnlyOneUser).toBe(true);
            });
    });
});

describe('E4', () => {
    test("Should add a new message at the end of the history.txt file", () => {
        const server = request(app);
        return server
            .post('/new-message')
            .send({
                userId: "5410",
                message: "This is a new message",
            })
            .then(response => {
                const historyFileData = fs.readFileSync("./history.txt");
                expect(historyFileData.toString().indexOf("5410:This is a new message")).toBeGreaterThan(-1);
                expect(response.body.status).toBe("ok");
            });
    });
})