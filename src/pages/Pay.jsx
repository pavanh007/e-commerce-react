import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
`;

const Button = styled.button`
  position: relative;
  padding: 1em 1.5em;
  color: #fff;
  font-size: 1.15rem;
  border-radius: 100vmax;
  background-color: transparent;
  border: 2px solid #fff;
  text-transform : uppercase;
  overflow: hidden;
  cursor: pointer;
`;

const KEY =
  "pk_test_51N7rGTSAvVXoO7CAy5ddCv6JNzgpRsCajlPlU0Fg86YYtedNlpzLqOpnXaC4aGOmpznyDhxCYiQq1csFGw6ACm2d00U887X06h";
const Pay = () => {
  const handlePayNow = () => {
    // Add your payment logic here
    console.log("Payment initiated!");
  };
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    console.log("Token :::", token);
    setStripeToken(token);
  }

  useEffect(() => {

    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5001/v1/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
            stripeEmail: "pavanhdsce@gmail.com"
          },
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    stripeToken && makeRequest()
  },
    [stripeToken])
  return (
    <Container>
      <StripeCheckout
        name="Flowerish"
        billingAddress
        shippingAddress
        description="Your totoal is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <Button onClick={handlePayNow}>Pay Now</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
