import ProductDetails from "@/components/UI/ProductDetails";
import React from "react";
export const getSingleData = async (id) => {
  const res = await fetch(`http://localhost:5000/watches/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
const ProductDetailsPage = async ({ params }) => {
  const data = await getSingleData(params.id);
  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default ProductDetailsPage;
