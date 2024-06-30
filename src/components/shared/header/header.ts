import { elementCreator } from '../../../utils/elementCreator';
import './header.css'
export function headerCreator(): void {
const divApp = document.querySelector("#app");
    
    
const iList = elementCreator('i', ['bi', 'bi-list'], []);
const divBurgerMenu = elementCreator('div', ['burger_menu'], [], [iList]);

const aShop = elementCreator('a', [], [{ href: '/' }], ['SHOP.CO']);
const h1Shop = elementCreator('h1', [], [], [aShop]);

const iCart = elementCreator('i', ['bi', 'bi-cart2'], []);
const liCart = elementCreator('li', ['icons-font'], [], [iCart]);

const iPerson = elementCreator('i', ['bi', 'bi-person-circle'], []);
const liPerson = elementCreator('li', ['icons-font'], [], [iPerson]);

const ulNav = elementCreator('ul', ['nav'], [], [liCart, liPerson]);

const divHeaderContent = elementCreator('div', ['header_content'], [], [divBurgerMenu, h1Shop, ulNav]);
const header = elementCreator('header', ['header'], [], [divHeaderContent]);


    divApp?.appendChild(header);
}