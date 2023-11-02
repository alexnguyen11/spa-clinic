// pages/api/payment.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // Amount is in cents
        currency: 'usd',
        payment_method: req.body.paymentMethodId,
        confirm: true
      });
      res.status(200).json(paymentIntent);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
