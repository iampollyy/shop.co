import './footer.css';
import { createLinks } from './footerComponents/linksList';
import { createNewsettlerSection } from './footerComponents/newSettler';
import { createSocialMediaList } from './footerComponents/socialMedia';
import { createPaymentsSection } from './footerComponents/payments';
import { elementCreator } from '../../../utils/elementCreator';

import { companyLinks } from './footerdata';
import { helpLinks } from './footerdata';
import { faqLinks } from './footerdata';
import { resourcesLinks } from './footerdata';
import { socialMediaLinks } from './footerdata';
import { paymentMethods } from './footerdata';

export const footerCreator = (): void => {

    const app = document.querySelector('#app');
    const newsettlerSection = createNewsettlerSection();
  
    const companyColumn = createLinks('company', companyLinks);
    const helpColumn = createLinks('help', helpLinks);
    const faqColumn = createLinks('faq', faqLinks);
    const resourcesColumn = createLinks('resources', resourcesLinks);
  
    const bottomRow = elementCreator('div', ['row', 'bottom_row'], [], [companyColumn, helpColumn, faqColumn, resourcesColumn]);
  
    const bottomContainer = elementCreator('div', ['bottom_container'], [], [
      elementCreator('div', ['column', 'shop'], [], [
        elementCreator('h3', [], [], ['shop.co']),
        elementCreator('p', [], [], ['We have clothes that suits your style and which you’re proud to wear. From women to men.']),
        createSocialMediaList(socialMediaLinks)
      ]),
      bottomRow
    ]);
  
    const paymentsSection = createPaymentsSection(paymentMethods);
  
    const footer = elementCreator('footer', ['bottom'], [], [newsettlerSection, bottomContainer, paymentsSection]);
    
    app?.appendChild(footer);
  };



