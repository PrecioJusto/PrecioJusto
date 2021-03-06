import { instances } from 'src/boot/axios';

const { apiProducts } = instances;

class ProductRepository {
  getBrands() {
    return apiProducts.get('/brands');
  }

  getBrand(paramsIds) {
    return apiProducts.get(`/brand/${paramsIds.branid}`);
  }

  getCategories() {
    return apiProducts.get('/categories');
  }

  getCategory(paramsIds) {
    return apiProducts.get(`/category/${paramsIds.cateid}`);
  }

  getCategoriesPaged(page) {
    return apiProducts.get(`/categories/${page}`);
  }

  getContainers() {
    return apiProducts.get('/containers');
  }

  getContainerByAttr(data) {
    return apiProducts.get('/container/byattr', data);
  }

  getOffers() {
    return apiProducts.get('/offers');
  }

  getOffer(paramsIds) {
    return apiProducts.get(`/offer/${paramsIds.offeid}`);
  }

  getPacks() {
    return apiProducts.get('/packs');
  }

  getPack(paramsIds) {
    return apiProducts.get(`/pack/${paramsIds.packid}`);
  }

  getProductsOrderdedByViews(page) {
    return apiProducts.get(`/products/page/${page}`);
  }

  getTopProducts() {
    return apiProducts.get('/products/top');
  }

  getProductsFromCategoryPaged(data) {
    return apiProducts.get(`/products/catename/${data.catename}/${data.page}`);
  }

  getProductsWithOfferOrderByPercentage() {
    return apiProducts.get('/products/offer');
  }

  getProduct(paramsIds) {
    return apiProducts.get(`/product/${paramsIds.prodid}`);
  }

  getProductsFromList(data) {
    return apiProducts.post('/products/idslist', data);
  }

  getAllProductsFromName(paramsProd) {
    return apiProducts.get(`/products/name/${paramsProd.value}`);
  }

  getAllProductsFromCatename(paramsProd) {
    return apiProducts.get(`/products/catename/${paramsProd.catename}`);
  }

  getRecipes() {
    return apiProducts.get('/recipes');
  }

  getRecipe(paramsIds) {
    return apiProducts.get(`/recipe/${paramsIds.reciid}`);
  }

  getSupermarkets() {
    return apiProducts.get('/supermarkets');
  }

  getSupermarket(paramsIds) {
    return apiProducts.get(`/supermarket/${paramsIds.supeid}`);
  }

  getSupermarketsproduct() {
    return apiProducts.get('/supermarketproducts');
  }

  getSupermarketproduct(paramsIds) {
    return apiProducts.get(`/supermarketproduct/${paramsIds.prodid}/${paramsIds.supeid}`);
  }
}

export const productRepository = new ProductRepository();
