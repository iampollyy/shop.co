import { elementCreator } from "../../../../utils/elementCreator";
import { SocMediaPaymentsInterface } from "./footerTypes";


export function createPaymentsSection (methods: SocMediaPaymentsInterface []): HTMLElement  {
  const paymentsWays = elementCreator('div', ['payments_ways'], [], methods.map(method => 
    elementCreator('a', [], [{ href: method.href }], [
      elementCreator('img', [], [{ src: method.src, alt: method.alt }], [])
    ])
  ));

  return elementCreator('div', ['payments'], [], [
    elementCreator('p', [], [], ['© 2000-2021, All rights reserved']),
    paymentsWays
  ]);
};