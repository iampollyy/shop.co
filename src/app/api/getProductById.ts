export async function getProductById(productId: string) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  return product;
}
