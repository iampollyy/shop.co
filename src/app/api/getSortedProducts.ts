import { TProduct } from "../types/TProduct";
import { getProductsByCategory } from "./getProductsByCategory";

export async function getSortedProducts(categoryId: string, selectedType: string, min: string, max: string) {
  const products = await getProductsByCategory(categoryId);

  console.log(min,max)
  const sortedByPriceProducts = products.products.filter((product: TProduct) => {
    return product.price >= Number(min) && product.price <= Number(max);
  });
  console.log(sortedByPriceProducts);

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
      console.log(sortedByPriceProducts);
      return sortedByPriceProducts;
    }
  }


  console.log(sortedByPriceProducts)

}