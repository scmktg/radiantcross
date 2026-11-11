export type Variant = { id: string; title: string; availableForSale: boolean; price: { amount: string; currencyCode: string }; selectedOptions: { name: string; value: string }[] };
export type Product = { id: string; handle: string; title: string; description: string; featuredImage?: { url: string; altText?: string }; images: { nodes: { url: string; altText?: string }[] }; variants: { nodes: Variant[] }; options: { name: string; values: string[] }[] };

const domain = process.env.SHOPIFY_STORE_DOMAIN?.replace(/^https?:\/\//, "").replace(/\/$/, "");
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_API_VERSION || "2025-10";
export const shopConfigured = Boolean(domain && token);

export async function shopify<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!domain || !token) throw new Error("Shopify connection is not configured.");
  const response = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": token },
    body: JSON.stringify({ query, variables }),
    cache: "no-store"
  });
  if (!response.ok) throw new Error(`Shopify request failed (${response.status}).`);
  const body = await response.json();
  if (body.errors?.length) throw new Error(body.errors.map((e: { message: string }) => e.message).join("; "));
  return body.data as T;
}

export async function getCollectionProducts(): Promise<Product[]> {
  if (!shopConfigured) return [];
  const query = `query Collection($handle: String!) {
    collection(handle: $handle) { products(first: 24) { nodes {
      id handle title description
      featuredImage { url altText }
      images(first: 8) { nodes { url altText } }
      options { name values }
      variants(first: 100) { nodes { id title availableForSale price { amount currencyCode } selectedOptions { name value } } }
    } } }
  }`;
  const handle = process.env.SHOPIFY_COLLECTION_HANDLE || "collection-001";
  try {
    const result = await shopify<{ collection: { products: { nodes: Product[] } } | null }>(query, { handle });
    return result.collection?.products.nodes || [];
  } catch (error) {
    console.error("Could not load Shopify collection:", error);
    return [];
  }
}

export function money(amount: string, currency = "AUD") {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency, maximumFractionDigits: 2 }).format(Number(amount));
}
