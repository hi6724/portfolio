import React from "react";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";
import { useParams } from "react-router-dom";
export default function Project() {
  const params = useParams();
  console.log(params);
  return (
    <ScreenLayout>
      <Container></Container>
    </ScreenLayout>
  );
}
const Container = styled.div`
  background-color: tomato;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
