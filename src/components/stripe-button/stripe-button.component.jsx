// import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';

// const StripeCheckoutButton = ({ price }) => {
//   const priceForStripe = price * 100;
//   const publishableKey =
//     'pk_test_51HonjtCGdO5tQt0Uwsls6t7jsHImiIZjTWnfCjxRAaNwgtYZ0aAPt6j1RHZvkjR04Iiz3UWcA9vFoqDKTNY6rPBI0065rQgsQr';

//   const onToken = (token) => {
//     axios({
//       url: 'payment',
//       method: 'post',
//       data: {
//         amount: priceForStripe,
//         token: token,
//       },
//     })
//       .then((response) => {
//         alert('succesful payment');
//       })
//       .catch((error) => {
//         console.log('Payment Error: ', error);
//         alert(
//           'There was an issue with your payment! Please make sure you use the provided credit card.'
//         );
//       });
//   };

//   return (
//     <StripeCheckout
//       label="Pay Now"
//       name="CRWN Clothing Ltd."
//       billingAddress
//       shippingAddress
//       image="https://svgshare.com/i/CUz.svg"
//       description={`Your total is $${price}`}
//       amount={priceForStripe}
//       panelLabel="Pay Now"
//       token={onToken}
//       stripeKey={publishableKey}
//     />
//   );
// };

// export default StripeCheckoutButton;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HonjtCGdO5tQt0Uwsls6t7jsHImiIZjTWnfCjxRAaNwgtYZ0aAPt6j1RHZvkjR04Iiz3UWcA9vFoqDKTNY6rPBI0065rQgsQr';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
