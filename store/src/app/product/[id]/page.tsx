"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Difference from "@/app/Components/Difference";
import Join from "@/app/Components/Join";
import Ceramics from "@/app/Components/Ceramics";
import { createClient } from "@sanity/client";

// Configure Sanity client
const client = createClient({
  projectId: "y2gmxx25", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: false, // Use CDN for faster responses (set false for latest data)
  apiVersion: "2023-01-01", // Replace with your API version
});

interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  tags?: string[];
  image_url: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  return await client.fetch(`*[_type=="product"][0..4]{
    _id,
    name,
    description,
    price,
    tags,
    "image_url": image.asset->url
  }`);
};

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  const product = products.find((p) => p._id === params.id);
  if (!product) return notFound();

  return (
    <>
      <div>
        <div className="w-full h-[759px] flex">
          <div className="w-6/12 h-full">
            <Image
              src={product.image_url}
              alt={product.name}
              height={700}
              width={700}
              className="w-full h-full bg-cover bg-no-repeat"
            />
          </div>
          <div className="w-6/12 h-full flex justify-center items-center">
            <div className="w-[602px] h-[657px]">
              <div className="w-[281px] h-[89px] mt-10 ml-10 text-[#2A254B]">
                <h3 className="text-4xl">{product.name}</h3>
                <h4 className="text-2xl mt-5">£{product.price}</h4>
                <h5 className="mt-8">Product description</h5>
                <p className="text-sm w-[498px] mt-4 max-w-xl">{product.description}</p>
                
                <ul className="list-disc pl-[16px] mt-4 text-sm">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>

                <div className="h-[94px] w-[360px] mt-8">
                  <h5>Dimensions</h5>
                  <div className="flex justify-between">
                    {["Height", "Width", "Depth"].map((dim) => (
                      <div key={dim} className="w-[43px] h-14 text-sm mt-4 flex flex-col">
                        <h6>{dim}</h6>
                        <h6>110cm</h6>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-20">
                  <div className="w-full">
                    <div className="flex items-center justify-center mt-2">
                      <div className="bg-[#F9F9F9] w-[360px] h-[56px] flex items-center gap-8 justify-center">
                        <button
                          onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
                          className="text-[#CAC6DA]"
                        >
                          -
                        </button>
                        {count}

                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ceramics />
      <Difference />
      <Join />
      <div className="h-auto w-full md:hidden">
        <div className="flex w-full justify-center md:justify-start md:w-6/12">
          <Image src={product.image_url} alt={product.name} width={390} height={380} />
        </div>

        <div className="pl-[22px] text-[#2A254B]">
          <h3 className="text-2xl font-semibold mt-4">{product.name}</h3>
          <p className="text-xl mt-4">£{product.price}</p>

          <h5 className="mt-8">Product description</h5>
          <p className="text-sm w-[360px] mt-4 max-w-xl">{product.description}</p>

          <ul className="list-disc pl-[16px] mt-4 text-sm">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          <div className="h-[94px] w-[360px] mt-8">
            <h5>Dimensions</h5>
            <div className="flex justify-between">
              {["Height", "Width", "Depth"].map((dim) => (
                <div key={dim} className="w-[43px] h-14 text-sm mt-4 flex flex-col">
                  <h6>{dim}</h6>
                  <h6>110cm</h6>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mt-8">
            <h5>Quantity</h5>
            <div className="flex items-center pr-5 justify-center mt-4">
              <div className="bg-[#F9F9F9] w-[360px] h-[46px] flex items-center gap-8 justify-center">
                <button
                  onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
                  className="text-[#CAC6DA]"
                >
                  -
                </button>
                {count}
                <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="text-[#CAC6DA]"
                  >
                    +
               </button>
              </div>
            </div>
          </div>

          {/* Removed Add to Cart button */}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
