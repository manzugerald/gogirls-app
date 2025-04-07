'use client';
import { loadScript } from '@paypal/paypal-js';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Donation = () => {
  const [amount, setAmount] = useState('10.00');
  const [customAmount, setCustomAmount] = useState('10.00');
  const [error, setError] = useState(null);
  const paypalRef = useRef(null);
  const paypalButtonsInstance = useRef(null);
  const router = useRouter();

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const donationOptions = [
    { label: '$10', value: '10.00' },
    { label: '$25', value: '25.00' },
    { label: '$50', value: '50.00' },
    { label: '$100', value: '100.00' },
  ];

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(value) && parseFloat(value) > 0)) {
      setCustomAmount(value);
      setAmount(value || '10.00');
      setError(null);
    } else {
      setError('Please enter a valid amount greater than 0.');
    }
  };

  const handleOptionClick = (value) => {
    setAmount(value);
    setCustomAmount(value);
    setError(null);
  };

  useEffect(() => {
    if (!clientId) {
      setError('PayPal configuration is missing. Please contact support.');
      console.error('Missing PayPal Client ID');
      return;
    }

    // Retrieve stored amount from localStorage (if exists)
    const storedAmount = localStorage.getItem('donationAmount');
    if (storedAmount) {
      setAmount(storedAmount);
      setCustomAmount(storedAmount);
    }

    const loadPaypal = async () => {
      try {
        const paypal = await loadScript({
          'client-id': clientId,
          currency: 'USD',
          components: 'buttons',
          intent: 'capture',
        });

        if (!paypal?.Buttons) {
          throw new Error('PayPal SDK loaded but Buttons component is unavailable');
        }

        // Cleanup any previous PayPal button instances
        if (paypalButtonsInstance.current) {
          paypalButtonsInstance.current.close();
          paypalButtonsInstance.current = null;
        }

        // Create PayPal button instance
        paypalButtonsInstance.current = paypal.Buttons({
          style: { layout: 'vertical', color: 'blue', shape: 'rect', label: 'donate' },
          createOrder: async () => {
            const response = await fetch('/api/paypal/create-order', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ amount }),
            });

            if (!response.ok) throw new Error('Failed to create order');
            const order = await response.json();
            return order.id;
          },
          onApprove: async (data) => {
            const response = await fetch('/api/paypal/capture-order', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ orderID: data.orderID }),
            });

            if (!response.ok) throw new Error('Failed to capture order');
            const details = await response.json();
            alert(`Thank you, ${details.payer.name.given_name}! Your donation of $${amount} was successful.`);
          },
          onError: (err) => {
            setError(`Payment error: ${err.message || 'Unknown error'}. Please try again.`);
            console.error('PayPal Button Error:', err);
          },
        });

        // Render PayPal button after creation
        if (paypalRef.current && paypalButtonsInstance.current) {
          await paypalButtonsInstance.current.render(paypalRef.current);
        }
      } catch (err) {
        setError(`Failed to load PayPal SDK: ${err.message}. Please refresh.`);
        console.error('PayPal SDK Load Error:', err);
      }
    };

    loadPaypal();

    // Cleanup on route change
    const handleRouteChange = () => {
      if (paypalButtonsInstance.current) {
        // Close and clean up PayPal button
        paypalButtonsInstance.current.close();
        paypalButtonsInstance.current = null;
      }
      if (paypalRef.current) {
        paypalRef.current.innerHTML = ''; // Empty the PayPal container
      }
    };

    router.events?.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events?.off('routeChangeStart', handleRouteChange);
      handleRouteChange(); // Ensure cleanup on unmount
    };
  }, [clientId, amount]);

  // Store the donation amount in localStorage whenever it changes
  useEffect(() => {
    if (amount) {
      localStorage.setItem('donationAmount', amount);
    }
  }, [amount]);

  return (
    <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-[#9f004d] mb-6 text-center">Support Our Mission</h2>
      <p className="text-gray-700 text-lg mb-6 text-center">
        Your donation helps empower girls in ICT through education, training, and community programs. Every contribution counts!
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {donationOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            className={`px-6 py-3 rounded-md text-lg font-semibold ${
              amount === option.value ? 'bg-[#9f004d] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="mb-6 text-center">
        <label htmlFor="customAmount" className="block text-gray-700 text-lg mb-2">
          Or Enter a Custom Amount ($)
        </label>
        <input
          id="customAmount"
          type="number"
          step="0.01"
          min="1"
          value={customAmount}
          onChange={handleCustomAmountChange}
          placeholder="Enter amount"
          className="w-full max-w-xs mx-auto p-3 border border-gray-300 rounded-md text-lg"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      <div ref={paypalRef} className="text-center">
        {!paypalButtonsInstance.current && !error && <p className="text-gray-500">Loading PayPal...</p>}
      </div>
    </div>
  );
};

export default Donation;