import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.h1`
  font-size: 24px;
  text-align: center;
  border: 1px solid teal;
  padding: 10px 10px;
  cursor: pointer;
`;


const PaymentSuccess = () => {
  return (
    <Container>
      <Header>Payment Successful 🎉🎊🥳</Header>
    </Container>
  );
};

export default PaymentSuccess;
