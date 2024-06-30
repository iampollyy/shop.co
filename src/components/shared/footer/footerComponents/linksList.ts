import { elementCreator } from "../../../../utils/elementCreator";
import { Link } from "./footerTypes";
 
export function createLinks(title: string, links: Link[]) {
    const listItems = links.map(link =>
        elementCreator('li', [], [], [
            elementCreator('a', [], [{ href: link.href }], [link.text])
        ])
    );
 
    const list = elementCreator('ul', ['column_contrnt'], [], listItems);
    const column = elementCreator('div', ['column', 'col-12', 'col-md-6'], [], [
        elementCreator('h3', [], [], [title]),
        list
    ]);
    
     
    return column;
}