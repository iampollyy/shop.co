import { TProduct } from "../types/TProduct";
import { getProductsByCategory } from "./getProductsByCategory";

export async function getSortedProducts(categoryId: string, selectedType: string, min: string, max: string) {
  const products = await getProductsByCategory(categoryId);

 
  const sortedByPriceProducts = products.products.filter((product: TProduct) => {
    return product.price >= Number(min) && product.price <= Number(max);
  });

  switch (selectedType) {
    case 'asc': {
      return sortedByPriceProducts.sort((a: TProduct, b: TProduct) => {
        return a.price - b.price;
      });
    }
    case 'desc': {
      return sortedByPriceProducts.sort((a: TProduct, b: TProduct) => {
        return b.price - a.price;
      });
    }
    default: {

      return sortedByPriceProducts;
    }
  }

}