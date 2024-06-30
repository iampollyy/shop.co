import { bannerCreator, headerCreator, footerCreator, heroCreator, categoriesCreator } from "../components/";


export async function getHomePage() {
  await bannerCreator()
  await headerCreator()
  await heroCreator()
  await categoriesCreator()
  await footerCreator()
 
}
