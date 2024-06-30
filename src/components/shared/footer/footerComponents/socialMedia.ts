import { elementCreator } from "../../../../utils/elementCreator";
import { SocMediaPaymentsInterface } from "./footerTypes";
export function createSocialMediaList (links: SocMediaPaymentsInterface []): HTMLElement {
  return elementCreator('ul', ['social_media'], [], links.map(link => 
    elementCreator('li', [], [], [
      elementCreator('a', [], [{ href: link.href }], [
        elementCreator('img', [], [{ src: link.src, alt: link.alt }], [])
      ])
    ])
  ));
};


