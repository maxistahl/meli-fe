import request from 'supertest';
import express from 'express';
import cors from 'cors';
import routes from './routes';

describe('Express server', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(cors());
    app.use(express.json());
    app.use(routes);
  });

  it('should respond with a 404 for non-existing routes', async () => {
    const res = await request(app).get('/non-existing-route');
    expect(res.statusCode).toEqual(404);
  });

  it('should respond with a 200 for existing routes', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toEqual(200);
  });
});