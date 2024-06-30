import { getCategoriesList } from "../../app/api/getCategoriesList";
import { elementCreator } from "../../utils/elementCreator";
import "../categoryCards/categoriesList.css"

export  async function categoriesCreator(): Promise<void> {
  const categories = await getCategoriesList();
  const app = document.querySelector('#app');

 

  const heading = elementCreator('h1', ['categories_heading'], [], ['Categories']);
  const rowDiv = elementCreator('div', ['row', 'justify-content-center'], []);
  const containerDiv = elementCreator('div', ['container', 'text-center'], [] , [heading, rowDiv]);
  const categoriesDiv = elementCreator('div', ['categories'], [], [containerDiv]);
   
  for(let category of categories) {
    const linkElement = elementCreator(
      'a',
      ['col-6', 'col-md-3', 'd-flex', 'category-card'],
      [{ href: `/category/${category.slug}` }],
      [
        elementCreator(
          'span',
          ['card-text'],
          [{ id: 'clickable' }],
          [category.name]
        )
      ]
    );
    rowDiv.appendChild(linkElement);
  }
   
    app?.appendChild(categoriesDiv);
    }
  
