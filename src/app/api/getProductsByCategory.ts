export async function getProductsByCategory(categoryId: string) {
    const products = await fetch(`https://dummyjson.com/products/category/${categoryId}`);
    const data = await products.json();
    return data;
}
