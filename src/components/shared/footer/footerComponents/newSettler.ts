import { elementCreator } from "../../../../utils/elementCreator";

export function createNewsettlerSection (): HTMLElement {
  const newsettlerText = elementCreator('div', ['newsettler_text'], [], [
    elementCreator('h2', [], [], ['STAY UPTO DATE ABOUT OUR LATEST OFFERS'])
  ]);

  const subscriptionForm = elementCreator('form', ['subscription_form'], [], [
    elementCreator('input', ['form-control'], [{ type: 'email' }, { id: 'formControlInput' }, { placeholder: ' Enter you email address' }], []),
    elementCreator('input', ['submit'], [{ type: 'submit', value: 'Subscribe to Newsletter' }], [])
  ]);

  const newsettlerWrapper = elementCreator('div', ['newsettler_wrapper'], [], [newsettlerText, subscriptionForm]);

  return elementCreator('div', ['newsettler'], [], [newsettlerWrapper]);
};


