import { NextResponse } from 'next/server';
import paypal from '@paypal/checkout-server-sdk';

// PayPal Environment Setup
const environment = process.env.PAYPAL_ENV === 'live'
  ? new paypal.core.LiveEnvironment(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
  : new paypal.core.SandboxEnvironment(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(request) {
  try {
    const { amount } = await request.json();
    console.log('Received amount:', amount); // Log the incoming amount

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      console.error('Invalid amount:', amount);
      return NextResponse.json({ error: 'Invalid donation amount' }, { status: 400 });
    }

    const orderRequest = new paypal.orders.OrdersCreateRequest();
    orderRequest.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: amount.toString(), // Ensure string format for PayPal
          },
          description: 'Donation to GoGirls ICT Initiative',
        },
      ],
    });

    const response = await client.execute(orderRequest);
    console.log('Order created:', response.result.id);
    return NextResponse.json({ id: response.result.id });
  } catch (error) {
    console.error('Error creating PayPal order:', error.message, error.stack);
    return NextResponse.json({ error: 'Failed to create order: ' + error.message }, { status: 500 });
  }
}