import React from "react";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";
import { useParams } from "react-router-dom";
import Graduate from "./Graduate";
import TodoApp from "./TodoApp";
import DietApp from "./DietApp";
import Newneek from "./Newneek";

const Child = ({ id }) => {
  const routes = {
    graduate: <Graduate />,
    todoApp: <TodoApp />,
    dietApp: <DietApp />,
    newneek: <Newneek />,
  };
  const newId = id.split(":")[1];

  return routes[newId];
};

export default function Project() {
  const params = useParams();
  return (
    <ScreenLayout>
      <Container>
        <Child id={params.id} />
      </Container>
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
