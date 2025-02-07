import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  dataset: "production",
  apiVersion: "2025-01-24",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

