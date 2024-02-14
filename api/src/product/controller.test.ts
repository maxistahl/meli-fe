import axios from 'axios';
import { getItemsByQuery, getItemById } from './controller';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Product Controller', () => {
  it('fetches items by query', async () => {
    const mockData = {
      results: [{ id: '1', title: 'Test Product', currency_id: 'ARS', price: 100, thumbnail: 'http://example.com/pic.jpg', condition: 'new', shipping: { free_shipping: true } }],
      filters: [{ id: 'category', values: [{ path_from_root: [{ name: 'Test Category' }] }] }]
    };

    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const result = await getItemsByQuery('test');

    expect(result).toEqual({
      author: { name: 'Maximiliano', lastname: 'Stahl' },
      items: [{ id: '1', title: 'Test Product', price: { currency: '$', amount: 100, decimals: 0 }, picture: 'http://example.com/pic.jpg', condition: 'Nuevo', free_shipping: true }],
      categories: ['Test Category']
    });
  });

  it('fetches item by id', async () => {
    const mockItem = { id: '1', title: 'Test Product', currency_id: 'ARS', price: 100, pictures: [{ url: 'http://example.com/pic.jpg' }], condition: 'new', shipping: { free_shipping: true }, sold_quantity: 5 };
    const mockDescription = { plain_text: 'Test Description' };

    mockedAxios.get.mockResolvedValueOnce({ data: mockItem });
    mockedAxios.get.mockResolvedValueOnce({ data: mockDescription });

    const result = await getItemById('1');

    expect(result).toEqual({
      author: { name: 'Maximiliano', lastname: 'Stahl' },
      item: { id: '1', title: 'Test Product', price: { currency: '$', amount: 100, decimals: 0 }, picture: 'http://example.com/pic.jpg', condition: 'Nuevo', free_shipping: true, sold_quantity: 5, description: 'Test Description' }
    });
  });
});