import { NextResponse } from "next/server";
import { shopify, shopConfigured } from "../../../lib/shopify";
type CartResponse = { cartCreate?: { cart?: { checkoutUrl: string }; userErrors: { message: string }[] } };
export async function POST(request: Request) {
  if (!shopConfigured) return NextResponse.json({ error: "Shopify checkout is not connected yet." }, { status: 503 });
  try {
    const input = await request.json();
    const variantId = input?.variantId;
    const quantity = Number(input?.quantity);
    if (typeof variantId !== "string" || !/^gid:\/\/shopify\/ProductVariant\/\d+$/.test(variantId) || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      return NextResponse.json({ error: "Please choose a valid size and quantity." }, { status: 400 });
    }
    const data = await shopify<CartResponse>(`mutation CreateCart($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) { cart { checkoutUrl } userErrors { message } }
    }`, { lines: [{ merchandiseId: variantId, quantity }] });
    const result = data.cartCreate;
    if (!result?.cart?.checkoutUrl || result.userErrors.length) {
      return NextResponse.json({ error: result?.userErrors?.[0]?.message || "Unable to start checkout." }, { status: 400 });
    }
    return NextResponse.json({ checkoutUrl: result.cart.checkoutUrl });
  } catch (error) {
    console.error("Shopify checkout error:", error);
    return NextResponse.json({ error: "Checkout is temporarily unavailable. Please try again." }, { status: 500 });
  }
}
