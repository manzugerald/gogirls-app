import { NextResponse } from 'next/server';
import paypal from '@paypal/checkout-server-sdk';

// PayPal Environment Setup
const environment = process.env.PAYPAL_ENV === 'live'
  ? new paypal.core.LiveEnvironment(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
  : new paypal.core.SandboxEnvironment(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(request) {
  try {
    const { orderID } = await request.json();

    if (!orderID) {
      return NextResponse.json({ error: 'Missing order ID' }, { status: 400 });
    }

    const captureRequest = new paypal.orders.OrdersCaptureRequest(orderID);
    captureRequest.requestBody({});

    const response = await client.execute(captureRequest);
    return NextResponse.json(response.result);
  } catch (error) {
    console.error('Error capturing PayPal order:', error);
    return NextResponse.json({ error: 'Failed to capture order' }, { status: 500 });
  }
}