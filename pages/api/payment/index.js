import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const url = process.env.CLIENT_URL;

export default async (req, res) => {
  if (req.method === "POST") {
    const { products } = req.body; // Expecting items to be an array of { name, amount, quantity }

    if (!products || products.length === 0) {
      res.status(400).json({ error: "No products provided." });
      return;
    }

    try {
      const lineItems = products.map((item) => ({
        price_data: {
          currency: "cad",
          product_data: {
            name: item.name,
            metadata: {
              id: item.id,
            },
          },
          unit_amount: item.amount * 100,
        },
        quantity: item.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `${url}/shop/checkout-success`,
        cancel_url: `${url}/shop/cart`,
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.error(error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
