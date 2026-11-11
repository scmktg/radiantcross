# Radiant Cross — Headless Shopify Storefront

Next.js 15 + React 19 storefront. Minimal Australian apparel aesthetic for the Southern Cross Tee in Black and Sand.

## Preview / safe mode
Without Shopify environment variables, the storefront shows branded illustrated product imagery, coming-soon labels and disabled purchase buttons. No fictional prices, inventory or checkout destinations.

## Connect Shopify
1. Create the product(s) and published variants (size and colour) in Shopify, and create a collection with handle `collection-001` (or update the environment variable).
2. Create a **Storefront API access token** for the Shopify store, with permission to read products and create carts.
3. Add the values from `.env.example` to your Vercel project's environment variables, for Preview and Production as desired.
4. Redeploy. Storefront displays actual Shopify product photography, variant prices and variant availability. Buy Now creates a Shopify cart and redirects to Shopify-hosted checkout.

**Important:** The storefront queries products by collection, and matches colours by Shopify product title/handle. For the easiest setup, create separate products named "Southern Cross Tee — Black" and "Southern Cross Tee — Sand", with individual size variants XS–2XL. If using a single product with a colour option, adapt product selection in `app/components/storefront.tsx` before launch.

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Notes
- Existing logo and favicon in `public/` are preserved.
- Illustration tees are placeholders for preview. Replace with final garment photography by uploading Shopify product images.
- Shopify checkout is only enabled after the connection is configured and the collection contains products.
- Shipping, taxes, fulfilment and customer communications must be configured in Shopify before going live.
