import { elementCreator } from "../../utils/elementCreator";
import noUiSlider from 'nouislider';
import { getProductsByCategory } from "../../app/api/getProductsByCategory";
import { TProduct } from "../../app/types/TProduct";
import "./filters.css"
import { getSortedProducts } from "../../app/api/getSortedProducts";
import { renderItems } from "../categoryItems/categoryItems";

export async function filtersCreator(categoryId: string): Promise<void> {
  const app = document.querySelector("#app");

  const filtersHeading = elementCreator('div', ['filters_heading'], [], [
      elementCreator('h3', ['filter_title'], [], ['Filters']),
      elementCreator('i', ['bi', 'bi-sliders2-vertical'], [])
  ]);

  const sortingWays = elementCreator('div', ['sorting_ways'], [], [
      elementCreator('h3', ['filter_title'], [], ['Sort']),
      elementCreator('label', [], [], [
          elementCreator('input', [], [{ type: 'radio' }, { name: 'sort_order' }, { value: 'asc' }]),
          elementCreator('p', [], [], [' Ascending'])
      ]),
      elementCreator('label', [], [], [
          elementCreator('input', [], [{ type: 'radio' }, { name: 'sort_order' }, { value: 'desc' }]),
          elementCreator('p', [], [], [' Descending'])
      ])
  ]);

  const priceRange = elementCreator('div', ['price_range'], [], [
      elementCreator('div', ['pricing_title'], [], [
          elementCreator('h3', ['filter_title'], [], ['Price']),
          elementCreator('i', ['bi', 'bi-chevron-up'], [])
      ]),
      elementCreator('div', [], [{ id: 'slider' }])
  ]);

  const applyFilterButton = elementCreator('input', ['apply_filter'], [{"type" : "submit"}, {"value": "Apply Filter"}], []);
  const resetFilterButton = elementCreator('input', ['reset_filter'], [{"type" : "submit"}, {"value": "Reset Filter"}], []);

  const filtersDiv = elementCreator('form', ['filters'], [{"id":"filters"}], [
      filtersHeading,
      elementCreator('hr', ['hr'], []),
      sortingWays,
      elementCreator('hr', ['hr'], []),
      priceRange,
      applyFilterButton,
      resetFilterButton
  ]);

  const main = elementCreator('main', ['main'], [], [filtersDiv]);
    app?.appendChild(main);
    
    const products = await getProductsByCategory(categoryId);
    const productList = products.products 

    const prices = productList.map((pr: TProduct) => pr.price);
    const slider = document.getElementById('slider');

    const min = Math.min(...prices)
    const max = Math.max(...prices)

    if (slider) {
        noUiSlider.create(slider, {
            start: [min, max], 
            connect: true, 
            range: {
                'min': min,
                'max': max
            },
            tooltips:true,
        });
    }

    

    document.querySelector("#filters")?.addEventListener("submit", async (event: Event) => {
        event.preventDefault();

        const minSelected = document.querySelectorAll('.noUi-tooltip')[0].innerHTML
        const maxSelected = document.querySelectorAll('.noUi-tooltip')[1].innerHTML

        const sortOptionElement = document.querySelector("input:checked") as HTMLInputElement;
        const selectedType = sortOptionElement!.value
        const sortedItems = await getSortedProducts(categoryId, selectedType, minSelected, maxSelected)
        renderItems(sortedItems, categoryId)
    })
    document.querySelector(".reset_filter")?.addEventListener("click", async () => {
        resetFilters(slider, min, max, categoryId);
      });
    }
    
    function resetFilters(slider: any, min: number, max: number, categoryId: string): void {
    
      slider.noUiSlider.set([min, max]);
    
      const radioButtons = document.querySelectorAll('input[name="sort_order"]') as NodeListOf<HTMLInputElement>;
      radioButtons.forEach(radio => radio.checked = false);
    
      getProductsByCategory(categoryId).then(products => {
        renderItems(products.products, categoryId);
      });
    }


