import React from "react";
import styled from "styled-components";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
export default function Graduate() {
  return (
    <>
      <DialogTitle>Use Google's location service?</DialogTitle>
      <DialogContent sx={{ width: 1000 }}>
        <Container>
          <h1>아아앙</h1>
        </Container>
      </DialogContent>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 80vw;
`;
