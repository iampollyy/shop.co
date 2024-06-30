import { getProductById } from "../../app/api/getProductById";
import './breadCrumbs.css'

export function breadCrumbsCreator() {
  const app = document.querySelector('#app')
  
  const breadCrumbsTemplate = `
    <div class="breadcrumbs" id="breadcrumbs">
      <a class="breadcrumbs-item" href='/'>Home</a>
    </div>   
    `
  const template = document.createElement('template');
  template.innerHTML = breadCrumbsTemplate;
  const newCrumbs = template.content;

  app?.appendChild(newCrumbs)
  const breadCrumbs = document.querySelector("#breadcrumbs")
  const route = window.location.pathname.split('/').slice(2)
  console.log(breadCrumbs)

  route.forEach( async (pathPart, i) => {
    let pathName =
        pathPart.charAt(0).toUpperCase() +
      pathPart.slice(1).toLocaleLowerCase();
    
    if (i == 1) {
      const productName = await getProductById(pathPart);
      pathName = productName.title;
    }
    const pathItemTemplate = `
      <a class="breadcrumbs-item" href="
        ${'/category/' + route.slice(0, i + 1).join('/')}
      ">
       >  ${pathName == 'Category' ? 'All products' : pathName }
      </a>
    `;

    const pathItem = document.createElement('template')
    pathItem.innerHTML = pathItemTemplate
    breadCrumbs?.appendChild(pathItem.content)
  })
}