import httpService from "./httpService";
import { apiUrl } from "../config.json";

export function CreateCard(product) {
  return httpService.post(`${apiUrl}/products`, product);
}
export function getMyProducts() {
  return httpService.get(`${apiUrl}/products/my-product`);
}
export function editProduct({ _id, ...body }) {
  return httpService.put(`${apiUrl}/products/${_id}`, body);
}
export function getProduct(id) {
  return httpService.get(`${apiUrl}/products/${id}`);
}

export function deleteProduct(id) {
  return httpService.delete(`${apiUrl}/products/${id}`);
}
export function getAllProducts() {
  return httpService.get(`${apiUrl}/products/story`);
}
export function getAllProductsId(id) {
  return httpService.get(`${apiUrl}/products/story/${id}`);
}

const productService = {
  CreateCard,
  getMyProducts,
  editProduct,
  getProduct,
  deleteProduct,
  getAllProducts,
  getAllProductsId,
};

export default productService;
