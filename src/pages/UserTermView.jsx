import React from "react";
import { Header, Container } from "./MoreView";
import CardLayout from "./../components/CardLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/theme/themeSlice";

function UserTermView() {
  const theme = useSelector(selectTheme);
  return (
    <Container theme={theme} className="animate__animated animate__bounceInUp animate__faster">
      <Header>
        <p>用户条款</p>
      </Header>
      <CardLayout theme={theme}>HELLO WORLD</CardLayout>
    </Container>
  );
}



export default UserTermView;
