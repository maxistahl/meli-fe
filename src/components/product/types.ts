export type Author = {
  name: string;
  lastname: string;
}

export type Price = {
  currency: string,
  amount: number,
  decimals: number
}

export type Product = {
  id: string,
  title: string,
  price: Price,
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