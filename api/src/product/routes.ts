import { Router } from 'express';
import { getItemById, getItemsByQuery } from './controller';
// import { ProductList } from './types';

const routes = Router();

routes.get('/', async (request, response) => {
  const query = request.query.q || '';
  const data = await getItemsByQuery(query as string);
  return response.json(data);
});

// @ts-ignore
routes.get('/:id', async (request, response) => {
  const { id } = request.params;
  const data = await getItemById(id);
  return response.json(data);
});

export default {
  path: '/api/items',
  routes
};
