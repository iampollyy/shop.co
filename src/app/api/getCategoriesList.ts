  
  export async function getCategoriesList(){
    const categories = await fetch('https://dummyjson.com/products/categories')
    const data = await categories.json()
  
      return data;
 
 
}


