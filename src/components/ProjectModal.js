import { Box, Modal } from "@mui/material";
import React from "react";
import DietApp from "../screens/DietApp";
import Graduate from "../screens/Graduate";
import Newneek from "../screens/Newneek";
import TodoApp from "../screens/TodoApp";

const Child = ({ id }) => {
  const routes = {
    graduate: <Graduate />,
    todoApp: <TodoApp />,
    dietApp: <DietApp />,
    newneek: <Newneek />,
    false: null,
  };
  return routes[id];
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75vw",
  height: "20vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ProjectModal = React.forwardRef(({ open, setOpen }, ref) => {
  return (
    <>
      <Modal open={Boolean(open)} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Child id={open} />
        </Box>
      </Modal>
    </>
  );
});
export default ProjectModal;
