import ProductDetails from "@/components/ProductDetails";
import { getSingleProduct } from "@/data.jsx";

export default function Productpage({ params: { id } }) {
  const product = getSingleProduct(parseInt(id));
  return <ProductDetails product={product} />;
}
