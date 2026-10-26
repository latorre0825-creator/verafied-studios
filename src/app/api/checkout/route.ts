import { getStripe, isStripeConfigured } from "@/lib/stripe";
import { merch } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: { id?: string; size?: string; quantity?: number };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const id = body.id || "";
  const size = body.size || "One size";
  const quantity = Math.min(Math.max(body.quantity || 1, 1), 10);

  const item = merch.find((m) => m.id === id);
  if (!item) {
    return Response.json({ error: "Unknown product" }, { status: 404 });
  }

  const stripe = getStripe();
  if (!stripe || !isStripeConfigured()) {
    return Response.json({
      configured: false,
      message: "Checkout opens the moment Stripe is connected. Your size is reserved — we'll notify you on drop day.",
    });
  }

  const origin = request.headers.get("origin") || new URL(request.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity,
          price_data: {
            currency: "usd",
            unit_amount: item.amount,
            product_data: {
              name: `${item.name} (${size})`,
              description: item.copy,
            },
          },
        },
      ],
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancelled`,
    });

    return Response.json({ url: session.url });
  } catch (err) {
    return Response.json({ error: "Checkout failed" }, { status: 500 });
  }
}
