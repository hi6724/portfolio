import React from "react";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";

export default function Introduce() {
  return (
    <ScreenLayout>
      <Container></Container>
    </ScreenLayout>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
