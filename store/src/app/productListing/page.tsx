import { getProductData } from '@/lib/productService';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import ProductCard from '../ProductCard';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  quantity: number;
  image: any; // Simplified type for Sanity images
  category: {
    name: string;
    slug: string;
  };
}

const ProductListingPage = async () => {
  let data: Product[] = [];
  
  try {
    data = await getProductData();
  } catch (error) {
    console.error('Error fetching product data:', error);
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load products. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="w-auto h-[146px] md:h-[209px] bg-[url('/PageHeaders.png')] md:bg-[url('/F1.png')] bg-cover bg-center">
        <h1 className="text-4xl text-white sm:block hidden pl-20 pt-[123px]">All Products</h1>
      </div>

      <div className="w-auto h-24 md:h-16 flex md:hidden justify-evenly items-center">
        <button className="w-[163px] h-[56px] bg-[#F9F9F9] flex items-center justify-center">
          Filters <ChevronDown className="w-4 h-4 ml-4" />
        </button>
        <button className="w-[163px] h-[56px] bg-[#F9F9F9] flex items-center justify-center">
          Sorting <ChevronDown className="w-4 h-4 ml-4" />
        </button>
      </div>

      <div className="w-full flex justify-center mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-10/12">
          {data.map((product: Product) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <ProductCard 
                image={product.image} 
                name={product.name} 
                price={product.price} 
                _id={product._id} 
                product={product} 
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
  
  