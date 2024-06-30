import { bannerCreator, headerCreator, footerCreator, breadCrumbsCreator, categoryItemsCreator, filtersCreator } from "../components/";


export async function getCategoryPage(path: any) {
    await bannerCreator();
    await headerCreator();
    await breadCrumbsCreator();
    await filtersCreator(path);
    await categoryItemsCreator(path)
    await footerCreator();
}


