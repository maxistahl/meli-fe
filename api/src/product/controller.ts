import axios from "axios";
import { ProductCategoriesRaw, ProductDetailsResponse, ProductList, ProductListRaw } from "./types";

const author = {
  name: 'Maximiliano',
  lastname: 'Stahl'
};

export const getItemsByQuery = async (query: string): Promise<ProductList> => {
  try {
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;
    const response = await axios.get(apiUrl);
    const { results, filters }: { results: ProductListRaw[], filters: ProductCategoriesRaw[] } = response.data;

    const parsedProducts = results.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id === 'ARS' ? '$' : product.currency_id,
          amount: product.price,
          decimals: 0
        },
        picture: product.thumbnail,
        condition: product.condition === 'new' ? 'Nuevo' : 'Usado',
        free_shipping: product.shipping.free_shipping
      };
    });
    const categoryFilter = filters.find(item => item.id === 'category');
    const cetegories = categoryFilter?.values[0]?.path_from_root.map((category) => category.name) || [];

    return {
      author,
      items: parsedProducts,
      categories: cetegories
    };
  } catch (error) {
    console.error(error);
    return {
      author,
      items: [],
      categories: []
    };
  }
}

export const getItemById = async (id: string): Promise<ProductDetailsResponse> => {
  try {
    const itemUrl = `https://api.mercadolibre.com/items/${id}`;
    const descriptionUrl = `https://api.mercadolibre.com/items/${id}/description`;

    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(itemUrl),
      axios.get(descriptionUrl)
    ]);

    const item = itemResponse.data;
    const description = descriptionResponse.data;

    const product = {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id === 'ARS' ? '$' : item.currency_id,
        amount: item.price,
        decimals: 0
      },
      picture: item.pictures[0]?.url,
      condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity || 0,
      description: description.plain_text
    };

    return {
      author,
      item: product
    };
  } catch (error) {
    console.error(error);
    return {
      author,
      item: null
    };
  }
}
