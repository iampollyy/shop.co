import { elementCreator } from '../../utils/elementCreator';
import './hero.css';
import './brands.css'

export function heroCreator(): void {
    const divApp = document.querySelector("#app");

    const heroText = elementCreator('div', ['hero_text'], [], [
        elementCreator('h1', ['main-title'], [], [
          'FIND ',
          elementCreator('span', [], [{ style: 'text-decoration: underline;' }], ['ANYTHING']),
          ' THAT MATCHES YOUR STYLE'
        ]),
        elementCreator('p', ['main-paragraph'], [], [
          'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.'
        ]),
        elementCreator('a', ['btn', 'btn-dark', 'button'], [{ href: '#' }], ['Shop now'])
      ]);
      
      const stats = elementCreator('div', ['stats'], [], [
        elementCreator('div', ['stats_upper'], [], [
          elementCreator('div', ['stats_block'], [], [
            elementCreator('h5', [], [], ['200+']),
            elementCreator('p', [], [], ['International Brands'])
          ]),
          elementCreator('div', ['stats_block'], [], [
            elementCreator('h5', [], [], ['2,000+']),
            elementCreator('p', [], [], ['High-Quality Products'])
          ])
        ]),
        elementCreator('div', ['stats_block'], [], [
          elementCreator('h5', [], [], ['30,000+']),
          elementCreator('p', [], [], ['Happy Customers'])
        ])
      ]);
      
    const heroColumn = elementCreator('div', ['hero_column'], [], [heroText, stats]);
  const smallStar = elementCreator('img', ['starSmall'], [{ src: 'src/assets/images/starsHero/VectorsmallStar.svg' }]);
  const bigStar = elementCreator('img', ['starBig'], [{ src: 'src/assets/images/starsHero/Vectorbigstar.svg' }]);
    const heroSection = elementCreator('section', ['hero'], [], [heroColumn, bigStar, smallStar]);
    divApp?.appendChild(heroSection);

    const brandsLogoList = elementCreator('div', ['brands_logo_list'], [], [
        elementCreator('img', ['brands_logo_list__img'], [{ src: './src/assets/images/brands/versace.png', alt: 'versace' }], []),
        elementCreator('img', ['brands_logo_list__img'], [{ src: './src/assets/images/brands/zara.png', alt: 'zara' }], []),
        elementCreator('img', ['brands_logo_list__img'], [{ src: './src/assets/images/brands/gucci.png', alt: 'gucci' }], []),
        elementCreator('img', ['brands_logo_list__img'], [{ src: './src/assets/images/brands/prada.png', alt: 'prada' }], []),
        elementCreator('img', ['brands_logo_list__img'], [{ src: './src/assets/images/brands/calvin_klein.png', alt: 'calvin klein' }], [])
      ]);
      
    const brandsLogo = elementCreator('div', ['brands_logo'], [], [brandsLogoList]);
    
    divApp?.appendChild(brandsLogo);
}    