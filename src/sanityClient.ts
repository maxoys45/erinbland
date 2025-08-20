import { createClient } from "@sanity/client";

export const client = createClient({
  dataset: "production",
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  apiVersion: "2023-01-01",
  useCdn: false, // while developing, set to true for prod.
});
