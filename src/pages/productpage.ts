import { bannerCreator, headerCreator, footerCreator, breadCrumbsCreator, productCardsCreator } from "../components/";


export async function getProductPage(productId:string) {
  await bannerCreator();
  await headerCreator();
  await breadCrumbsCreator();
  await productCardsCreator(productId);
  await footerCreator();
}