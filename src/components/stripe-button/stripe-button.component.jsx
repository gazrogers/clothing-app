import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    alert('Payment successful');
};

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_THRD92ZotrIkRXi8RciaPpEJ00Z9i1kKi1';

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Banana"
            billingAddress
            shippingAddress 
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is £${price}`}
            amount={priceForStripe}
            currency="GBP"
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;