import request from 'supertest';
import express from 'express';
import axios from 'axios';
import routes from './routes';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const app = express();
app.use(routes.path, routes.routes);

describe('Product Routes', () => {
  it('should get items by query', async () => {
    const mockData = {
      results: [{ id: '1', title: 'Test Product', currency_id: 'ARS', price: 100, thumbnail: 'http://example.com/pic.jpg', condition: 'new', shipping: { free_shipping: true } }],
      filters: [{ id: 'category', values: [{ path_from_root: [{ name: 'Test Category' }] }] }]
    };

    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const res = await request(app).get('/api/items').query({ q: 'test' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('items');
  });

  it('should get item by id', async () => {
    const mockItem = { id: '1', title: 'Test Product', currency_id: 'ARS', price: 100, pictures: [{ url: 'http://example.com/pic.jpg' }], condition: 'new', shipping: { free_shipping: true }, sold_quantity: 5 };
    const mockDescription = { plain_text: 'Test Description' };

    mockedAxios.get.mockResolvedValueOnce({ data: mockItem });
    mockedAxios.get.mockResolvedValueOnce({ data: mockDescription });

    const res = await request(app).get('/api/items/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('item');
  });
});