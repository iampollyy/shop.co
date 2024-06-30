
import  './categoryItems.css'
import { getProductsByCategory } from "../../app/api/getProductsByCategory";
import { elementCreator } from "../../utils/elementCreator";
import { TProduct } from '../../app/types/TProduct';

export async function categoryItemsCreator(categoryId: string) {
	const products = await getProductsByCategory(categoryId);
	const main = document.querySelector('main');
	const row = elementCreator('div', ['row', 'rowProducts', 'justify-content-space-evenly'], [{"id" : "board"}]);
	const container = elementCreator('div', ['container', 'containerProducts'], [], [row]);
  const contentHeader = elementCreator('h1', [`content_header`], [], [`${categoryId}`]);
	const contentDiv = elementCreator('div', ['content'], [], [contentHeader, container]);

	main?.appendChild(contentDiv)
	renderItems(products.products, categoryId)
}

export function renderItems(items: TProduct[], categoryId: string) {
	const board = document.querySelector("#board");
	board!.innerHTML= ''
	for (let product of items) {
		const productCardTemplate = `
		 <div class="col-6 col-md-4 d-flex d-flexCard">
        <a href="/category/${categoryId}/${product.id}" class="category-card">
            <img class="pic" src="${product.images[0]}"></img>
        </a>
        <h4 class="product_name">${product.title}</h4>
        <div class="rating">
            <div class="stars">
                ${'<i class="bi bi-star-fill"></i>'.repeat(Math.round(product.rating))}
            </div>
            <p>${Math.round(product.rating)}/<span style="color: #00000099;">5</span></p>
        </div>
        <h4 class="price">${product.price}</h4> 
      </div>` 
		const template = document.createElement('template');
		template.innerHTML = productCardTemplate;
		const newItem = template.content;
		board?.appendChild(newItem)
	}
}