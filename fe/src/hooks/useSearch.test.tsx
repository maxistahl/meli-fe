import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { ProductDetails } from '../components/product/types';
import useSearch from './useSearch';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const search = 'test';
const mockedData: ProductDetails = {
  id: 'MLA123',
  picture: 'test.jpg',
  title: 'Test product',
  description: 'Test description',
  condition: 'nuevo',
  sold_quantity: 5,
  price: { amount: 100, currency: '$', decimals: 0 },
  free_shipping: true,
};

describe('useSearch', () => {
  it('fetches products data', async () => {

    mockedAxios.get.mockResolvedValueOnce({ data: { items: [mockedData], categories: ['cat1'] } });

    const { result } = renderHook(() => useSearch(search));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      const { loading, products, categories } = result.current;
      expect(loading).toBe(false);
      expect(products).toEqual([mockedData]);
      expect(categories).toEqual(['cat1']);
    });
  });
});