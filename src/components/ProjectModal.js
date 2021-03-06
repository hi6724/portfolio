import { Box, Modal } from "@mui/material";
import React from "react";
import DietApp from "../screens/DietApp";
import Graduate from "../screens/Graduate";
import Newneek from "../screens/Newneek";
import TodoApp from "../screens/TodoApp";
import styled from "styled-components";
import JobScrapper from "../screens/JobScrapper";

const Child = ({ id, project }) => {
  const routes = {
    graduate: <Graduate project={project} />,
    todoApp: <TodoApp project={project} />,
    jobScrapper: <JobScrapper project={project} />,
    newneek: <DietApp project={project} />,
    twitter: <DietApp project={project} />,
    insta: <DietApp project={project} />,
  };
  return routes[id];
};

const ProjectModal = React.forwardRef(({ project, open, setOpen }, ref) => {
  return (
    <>
      <Modal open={Boolean(open)} onClose={() => setOpen(false)} onClick={() => setOpen(false)}>
        <Container>
          <div style={{ position: "relative", paddingBottom: 350 }}>
            <Child id={open} project={project} />
          </div>
        </Container>
      </Modal>
    </>
  );
});
export default ProjectModal;

const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max(70vw, 860px);
  min-height: 30vh;
  max-height: 88vh;
  background-color: white;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
