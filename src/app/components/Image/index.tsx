"use client";

import { ProductType } from "@/types/ProductType";
import { useState } from "react";

import Image from "next/image";

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};

export const ProductImage = (props: ProductImageProps) => {
  const [loading, setLoading] = useState(true);

  const { product, fill } = props;
  return fill ? (
    <Image
      src={product.image}
      fill
      alt={product.title}
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      height={700}
      width={700}
      alt={product.title}
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};
