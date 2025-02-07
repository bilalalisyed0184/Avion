// Set API Version with a default fallback
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-24';

// Validate and retrieve the dataset
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

// Validate and retrieve the project ID
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

// Validate and retrieve the use of the preview mode (optional)
export const useCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true';

/**
 * Utility function to assert that a value is defined.
 * Throws an error if the value is undefined.
 * @param v - The value to check.
 * @param errorMessage - The error message to throw if the value is undefined.
 * @returns The validated value.
 */
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined || v === '') {
    throw new Error(errorMessage);
  }

  return v;
}
