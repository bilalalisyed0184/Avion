import { client } from '@/sanity/lib/client'; // Import the Sanity client
import { groq } from 'next-sanity'; // Import GROQ for querying Sanity

// Define the GROQ query to fetch product data
const query = groq`*[_type == "product"] {
  _id,
  name,
  description,
  price,
  tags,
  quantity,
  image,
  category-> {
    name,
    slug
  }
}`;

/**
 * Fetches product data from the Sanity API.
 * @returns An array of product objects.
 */
export async function getProductData() {
  try {
    const products = await client.fetch(query); // Fetch data using the client
    return products;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw new Error('Could not fetch product data');
  }
}

// Define the GROQ query to fetch popular products
const popularProductsQuery = groq`*[_type == "product" && "popular products" in tags] {
  _id,
  name,
  description,
  price,
  tags,
  quantity,
  image,
  category-> {
    name,
    slug
  }
}`;

/**
 * Fetches popular products from the Sanity API.
 * @returns An array of popular product objects.
 */
export const getPopularProducts = async () => {
  try {
    const popularProducts = await client.fetch(popularProductsQuery); // Fetch data using the client
    return popularProducts;
  } catch (error) {
    console.error('Error fetching popular products:', error);
    throw new Error('Could not fetch popular products');
  }
};

// Define the GROQ query to fetch ceramics data
const ceramicsQuery = groq`*[_type == "product" && "ceramics" in tags] {
  _id,
  name,
  price,
  image
}`;

/**
 * Fetches ceramics data from the Sanity API.
 * @returns An array of ceramics product objects.
 */
export async function getCeramicsData() {
  try {
    const ceramics = await client.fetch(ceramicsQuery);
    return ceramics;
  } catch (error) {
    console.error('Error fetching ceramics data:', error);
    throw new Error('Could not fetch ceramics data');
  }
}
