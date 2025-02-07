'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCeramicsData } from '@/lib/productService';
import { urlFor } from '@/sanity/lib/image';

interface Ceramic {
  _id: string;
  name: string;
  price: number;
  image: any; // Simplified type for Sanity images
}

const Ceramics = () => {
  const [ceramics, setCeramics] = useState<Ceramic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCeramics = async () => {
      try {
        const data = await getCeramicsData();
        setCeramics(data);
      } catch (error) {
        console.error('Error fetching ceramics data:', error);
        setError('Failed to load ceramics');
      } finally {
        setLoading(false);
      }
    };

    fetchCeramics();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="w-full h-[761px]">
      <h4 className="text-[32px] md:pl-24 pl-16 pt-20">New ceramics</h4>
      <div className="h-[462px] w-full flex justify-center gap-8 mt-6 flex-wrap">
        {ceramics.map((newItem) => (
          <div key={newItem._id} className="flex flex-col">
            <div>
              <Image src={urlFor(newItem.image).url()} alt={newItem.name} width={305} height={250} />
            </div>
            <h4 className="text-[20px] mt-4">{newItem.name}</h4>
            <p className="text-sm mt-2">${newItem.price}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <Link href={'/productListing'}>
        <div className="w-full flex justify-center mt-10">
          <button className="w-[170px] h-[56px] bg-[#F9F9F9] text-sm">View collection</button>
        </div>
      </Link>
    </div>
  );
};

export default Ceramics;