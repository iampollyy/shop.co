import { elementCreator } from '../../../utils/elementCreator'; 
import { CloseEventHandler } from '../../../utils/handlers/closeBtn';
import './banner.css';

export function bannerCreator(): void {
    const divApp = document.querySelector("#app");
    const a = elementCreator('a', ['sign-up'], [{ href: '#' }], ["Sign Up Now"]);
    const p = elementCreator('p', [], [], ['Sign up and get 20% off to your first order. ', a]);
    const closeButton = elementCreator('button', ['close-button'], [], ['&times;']);
    const bannerMenu = elementCreator('div', ['banner-menu'], [], [p, closeButton]);
    const banner = elementCreator('div', ['banner'], [], [bannerMenu]);

    divApp?.appendChild(banner);
    CloseEventHandler(".close-button", ".banner");

}

