import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Validate that `projectId` and `dataset` are properly defined
if (!projectId || !dataset) {
  throw new Error("Missing Sanity project ID or dataset. Please ensure these are defined in the `env` file.");
}

// Initialize the Sanity image URL builder
const builder = createImageUrlBuilder({
  projectId: projectId,
  dataset: dataset,
});

// Helper function to generate image URLs
export const urlFor = (source: SanityImageSource) => builder.image(source);
