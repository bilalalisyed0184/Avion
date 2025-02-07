"use client";
import React, { FC } from 'react'
import { getProductData } from '@/lib/productService';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { product } from '@/sanity/product';

const ProductCard:FC<{
    image: any;
    name: string;
    price: any;
    _id: any;product: any
}> = (product) => {

    const handleAddToCart = async () => {
        const res = await fetch('/api/cart', {
            method: 'POST',
            body: JSON.stringify({
                productId: product._id
            }),
        })
        const result = await res.json()
        console.log(result)
    }

  return (
      <div className="bg-white rounded-md shadow-md p-4 flex flex-col items-center">
                      <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                        {product.image ? (
                          <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={192}
                            height={192}
                            className="object-contain"
                          />
                        ) : (
                          <div className="text-gray-500 text-sm">No Image Available</div>
                        )}
                      </div>
                      <h4 className="text-lg mt-4 text-center font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">${product.price.toFixed(2)}</p>
                      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition-all">
                        Add to Cart
                      </button>
                    </div>
  )
}

export default ProductCard
