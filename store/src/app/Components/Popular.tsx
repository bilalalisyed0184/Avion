'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getPopularProducts } from '@/lib/productService';
import { urlFor } from '@/sanity/lib/image';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: any; // Simplified type for Sanity images
}

const Popular = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleNavigation = () => {
    router.push('/productListing'); // Navigates to the "/productlisting" page
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getPopularProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching popular products:', error);
        setError('Failed to load popular products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>

          {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            {products.map((product, index) => (
              <div key={product._id} className={`w-full ${index === 0 ? 'md:w-[700px]' : 'md:w-[350px]'} h-auto group`}>
                <Image
                  src={urlFor(product.image).url()}
                  height={800}
                  width={800}
                  alt={product.name}
                  className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                />
                <div className='mt-4 text-[#2A254B]'>
                  <p className='py-2'>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className='my-10 flex justify-center items-center'>
            <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]' onClick={handleNavigation}>
              View collection
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
