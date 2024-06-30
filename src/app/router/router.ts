import Navigo from 'navigo';
import { getHomePage } from '../../pages/homepage';
import { getCategoryPage } from '../../pages/categorypage';
import { getProductPage } from '../../pages/productpage';
const router = new Navigo('/');

router.on({
    '/': () => getHomePage(),
    '/category/:categoryId': async (params:any) => {
        getCategoryPage(params.data.categoryId);
    },
    '/category/:categoryId/:productId': async (params: any) => {
         getProductPage(params.data.productId)
     }
   
}).resolve();

export default router;




