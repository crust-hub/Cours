import React from "react";
import { Header, Container } from "./MoreView";
import CardLayout from "./../components/CardLayout";
import styled from "styled-components";

function ConcatUsView() {
  return (
    <Container className="animate__animated animate__bounceInUp animate__faster">
      <Header>
        <p>联系我们</p>
      </Header>
      <Card>HELLO WORLD</Card>
    </Container>
  );
}

const Card = styled(CardLayout)`
  background-color: #ffffff;
`;

export default ConcatUsView;
