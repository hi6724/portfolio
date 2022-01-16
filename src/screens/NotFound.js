import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";

export default function NotFound() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <ScreenLayout>
      <Container>
        <div>
          <Title>404 Page Not Found</Title>
          <ErrorMsg>The requested URL </ErrorMsg>
          <ErrorMsg>
            <span style={{ fontFamily: "BM-Pro", fontSize: 20 }}>{location.pathname}</span> was not found on this server
          </ErrorMsg>
        </div>
      </Container>
    </ScreenLayout>
  );
}

const Title = styled.h1`
  font-family: "BM-Pro";
  font-size: 40px;
  margin: 35px 0px;
`;

const ErrorMsg = styled.h1`
  font-family: "BM-Air";
  font-size: 18px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
