export type Author = {
  name: string;
  lastname: string;
}

export type Product = {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  picture: string,
  condition: string,
  free_shipping: boolean
};

export type ProductDetails = Product & {
  sold_quantity: number,
  description: string
};

export type ProductList = {
  author: Author,
  categories: string[],
  items: Product[]
};