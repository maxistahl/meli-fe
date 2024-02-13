import { renderHook, waitFor } from '@testing-library/react';
import useProduct from './useProduct';
import axios from 'axios';
import { ProductDetails } from '../components/product/types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const id = 'MLA123';
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

describe('useProduct', () => {
  it('fetches product data', async () => {

    mockedAxios.get.mockResolvedValueOnce({ data: { item: mockedData } });

    const { result } = renderHook(() => useProduct(id));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      const { loading, product } = result.current;
      expect(loading).toBe(false);
      expect(product).toEqual(mockedData);
    });
  });
});