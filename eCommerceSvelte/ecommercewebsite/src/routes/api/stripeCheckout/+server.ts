import type { RequestHandler } from "./$types";
import Stripe from 'stripe'

const STRIPE_API_KEY = "sk_test_51NONvLC892MWjQYTUg369LLlC91oUmUlLaLjisw5hS7h1eXow2C5oNoY9VAcUG5s1pq1PEdPQ2ISMDcfrKqLkr2E00nriAbJwn"
const stripe = new Stripe(STRIPE_API_KEY, {
    apiVersion: "2022-11-15"
})

export const POST: RequestHandler = async({request}) => {
    const data = await request.json();
    const items = data.items;
    const lineItems: any = [];
    items.forEach((item: any) => {
        lineItems.push({price: item.id, quantity: item.quantity});
    });
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://127.0.0.1:5173/success",
        cancel_url: "http://127.0.0.1:5173/cancel"
    });

    return new Response(
        JSON.stringify(({url: session.url})),
        {
            status: 200,
            headers : {'content-type': 'application/json'}
        }
    );
}