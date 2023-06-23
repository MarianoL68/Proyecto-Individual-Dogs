const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe("Test de RUTAS", () => {
    describe('Get/rickandmorty/character/:id', () => {
        it('Responde con status: 200',async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200)
        })
    })
})