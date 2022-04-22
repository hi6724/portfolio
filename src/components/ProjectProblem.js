import React from "react";
import styled from "styled-components";

export default function ProjectProblem({ title, url, children, size = 450 }) {
  return (
    <Container>
      <SubTitle>{title}</SubTitle>
      <Content>
        <ContentImg size={size} src={url} />
        <div>{children}</div>
      </Content>
    </Container>
  );
}

const ContentImg = styled.img`
  width: ${(props) => props.size}px;
  margin-right: 45px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const SubTitle = styled.h2`
  font-family: "BM-Air";
  font-weight: 600;
  color: #002366;
  opacity: 0.8;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 50px;
`;
export const Container = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  flex-direction: column;
`;
