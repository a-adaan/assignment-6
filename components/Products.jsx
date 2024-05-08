import { getAllproduct, getProductsByCategory } from "@/data.jsx";
import SingleProduct from "./SingleProduct";

export default function Products({ cateName }) {
  let products = [];
  if (cateName && cateName != "All") {
    products = getProductsByCategory(cateName);
  } else {
    products = getAllproduct();
  }
  return products.map((product) => (
    <SingleProduct key={product.id} product={product} />
  ));
}
