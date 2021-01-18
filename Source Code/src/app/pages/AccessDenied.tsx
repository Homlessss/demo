import React from "react";
import { toAbsoluteUrl } from "../helpers";
import styled from "styled-components";

export default () => {
  return (
    <div>
      <BackgroundImage src={toAbsoluteUrl("media/error/bg1.jpg")} />
      <Container>
        <Title>403</Title>
        <SubTitle>Forbiden denied</SubTitle>
      </Container>
    </div>
  );
};

const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 10rem;
  font-weight: 400;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;
