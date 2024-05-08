import { productData } from "./product-data";

export function getAllproduct() {
  return productData.products;
}

export function getProductsByCategory(category) {
  const categoryProducts = productData.products.filter(
    (product) => product.category === category
  );
  return categoryProducts;
}

export function allCategory() {
  const categorys = productData.products.map((product) => product.category);
  return categorys;
}

export function getSingleProduct(id) {
  const product = productData.products.find((product) => product.id === id);
  return product;
}
