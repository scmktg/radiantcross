import Storefront from "./components/storefront";
import { getCollectionProducts, shopConfigured } from "../lib/shopify";
export default async function Home() {
  const products = await getCollectionProducts();
  return <Storefront products={products} configured={shopConfigured && products.length > 0} />;
}
