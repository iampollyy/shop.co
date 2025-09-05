<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/dfa764f2-ab4c-497b-9f0c-109a78e888f6" />
<img width="1894" height="856" alt="image" src="https://github.com/user-attachments/assets/1f3049af-a421-4ea1-ac08-a029f069ecb5" />
<img width="1910" height="859" alt="image" src="https://github.com/user-attachments/assets/1068b591-8700-4a31-b3b4-67998d9ae4c9" />
<img width="1813" height="866" alt="image" src="https://github.com/user-attachments/assets/ade1bf10-567e-4b86-91aa-a22ddd7bf5fb" />
<img width="1669" height="828" alt="image" src="https://github.com/user-attachments/assets/7d7a47b5-8ea8-495b-b0b6-4b4d80e639bd" />


# Hometask: TypeScript Vite DOM API Project 🌐

This project involves creating a series of fully functional webpages based on the provided **Figma design** while adhering to modern web development standards. Below is a simplified breakdown of the technical requirements and page components.

[Figma Design Link](https://www.figma.com/design/Q0zYyVhjvTQMKg8tqtUPLB/E-commerce-Website-Template-(Freebie)-(Community)?node-id=0-1&t=4ZgOl1BpZ6sfCMRZ-0)

---

## 🚀 Tech Stack

- **Frontend Framework/Tools:**
  - [Vite 5](https://vitejs.dev/)  
  - [TypeScript 5](https://www.typescriptlang.org/)  
  - DOM API for dynamic content creation (**three approaches provided below**).  

- **Styling:**
  - HTML5 & CSS3/SCSS/SASS.  
  - Used libraries like:
    - [Bootstrap](https://getbootstrap.com/)  
     

- **Routing:**  
  - [Navigo Router](https://www.npmjs.com/package/navigo).  

- **Backend:**  
  - [DummyJSON API](https://dummyjson.com/docs/products) for fetching data.  

- **Fonts:**  
  - [Rubik](https://fonts.google.com/specimen/Rubik).  
  - [Poppins](https://fonts.google.com/specimen/Poppins).  

- **Advanced Features:**  
  - Fetch API for data loading.  
  - DOM manipulation with:
    1. `document.createElement()` (append dynamically).
    2. HTML templates with `innerHTML`.
    3. Template strings for rendering UI components.

---

## 🖥️ Pages Overview

### 1. **Homepage Desktop**  
**Components:**  
- **Header:** Displays title and icons.  
- **Hero Section:** Includes a title, an image, and other elements.  
- **Categories Grid:**  
  - Dynamically loads categories from the backend (API: `/products/categories`).  
  - Each category item is clickable and navigates to `/category/:categoryName`.  
- **Newsletter Signup Form:** ("Stay up to date about...")  
- **Footer**  

---

### 2. **Category Page Desktop**  
**Components:**  
- **Header:** Displays title and icons.  
- **Breadcrumbs:**  
  - Dynamic navigation:  
    - "Home" link navigates to `/`.  
    - "Groceries" shows the current `categoryName`.  
- **Products Grid:**  
  - Dynamically loads products for the given category (API: `/products/category/:categoryName`).  
  - Each product displays:  
    - Title, image, price, and description.  
    - Click on a product to navigate to `/:categoryName/:productId`.  
- **Filters:**  
  - **Sort:** Ascending/Descending by price.  
  - **Price Range:** Adjustable slider for min/max price filtering.  
  - **Apply/Reset Filters:** Filter products dynamically.  
- **Newsletter Signup Form**  
- **Footer**  

---

### 3. **Product Detail Page Desktop**  
**Components:**  
- **Header:** Displays title and icons.  
- **Breadcrumbs:**  
  - "Home" navigates to `/`.  
  - Current category displays as "Groceries".  
  - Current product displays as "Tree oil 300ml".  
- **Product Details Grid:**  
  - Dynamically loads details for the selected product (API: `/products/:productId`).  
  - Displays:
    - Title, rating, description, price, discount percentage, brand, stock, and images (gallery).  
- **Newsletter Signup Form**  
- **Footer**  

---

## 🛠️ DOM API Creation Approaches

1. **`document.createElement()` Approach:**  
 
2. **HTML Templates with `innerHTML`:**  
  
3. **Template Strings for Rendering:**  
  

## 📦 Running the Project

1. Clone the repository.  
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the development server:  
   ```bash
   vite serve
   ```

---

## 🌟 Key Backend Endpoints

- **Categories:** `/products/categories`.  
- **Products by Category:** `/products/category/:categoryName`.  
- **Product Details:** `/products/:productId`.  

---

## ✨ Future Enhancements

- Add mobile responsiveness and adaptivity.  
- Implement additional product filters (e.g., by brand or rating).  
- Include animations for better user experience.  

---

Feel free to explore or give a feedback!
