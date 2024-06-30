import { getProductById } from "../../app/api/getProductById"
import { TProduct } from "../../app/types/TProduct";
import "./productCard.css"

export async function productCardsCreator(productId: string) {
  const app = document.querySelector("#app");
  const product: TProduct = await getProductById(productId);

  const mainContent = `  <main>

    <div class="main_container">
      <div class="conteiner_left">
        <div class="group_galery">
          <div class="img_card_small" tabindex="0"><img src="${product.images[0]}" alt=""></div>
          <div class="img_card_small" tabindex="0"><img src="${product.images[1]}" alt=""></div>
          <div class="img_card_small" tabindex="0"><img src="${product.images[2]}" alt=""></div>
        </div>
        <div class="img_card_big"><img src="${product.images[0]}" alt=""></div>
      </div>

      <div class="container_right">
        <h3 class="product_title">${product.title}</h3>
        <div class="rating">
          <div class="stars">
              ${"<i class='bi bi-star-fill'></i>".repeat(Math.round(product.rating))}
          </div>
          <p class="rating_numbers">${Math.round(product.rating)}/<span style="color: #00000099;">5</span></p>
      </div>
      <div class="pricing">
        <p class="new_price">${(product.price -  (1 - product.discountPercentage / 100)).toFixed(2)}</p>
        <p class="old_price">${product.price}</p>
        <div class="sale">-${Math.round( product.discountPercentage)}%</div>
      </div>

      <p class="product_description">${product.description? product.description: 'There is no description'}</p>
      
      <div class="brand">
         <p class="caption">Brand</p>
         <h3 class="accent_text">${product.brand ? product.brand : 'The brand name is not available'}</h3>

      </div>

      <div class="availability">
        <p class="caption">${product.availabilityStatus}</p>
        <h3 class="accent_text">${product.stock}</h3>

     </div>

     <div class="group_buttons">

      <div class="counter">
        <button class="reduce_items"><i class="bi bi-dash-lg"></i></button>
        <p>1</p>
        <button class="add_items"><i class="bi bi-plus-lg"></i></button>
      </div>

      <button class="add_to_cart">Add to Cart</button>
     </div>
        </div>
      </div>
    </div>
  </main>`


  const template = document.createElement('template');
	template.innerHTML = mainContent;
	const newItem = template.content;

  
  app?.appendChild(newItem)


 
}