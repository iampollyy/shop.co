interface IAttribute {
    [key: string]: string;
  }
  
  export function elementCreator(
    tagName: string,
    classes: string[],
    attributes?: IAttribute[],
    innerContent?: (string | HTMLElement)[]
  ): HTMLElement {
    const element = document.createElement(tagName);
  
    element.classList.add(...classes);
  
    if (attributes)
      attributes.forEach((attr) => {
        const [key, value] = Object.entries(attr)[0];
        element.setAttribute(key, value);
      });
  
    if (innerContent)
      innerContent.forEach((child) => {
        if (typeof child === "string") {
          element.innerHTML += child;
        } else {
          element.appendChild(child);
        }
      });
  
    return element;
  }
  