import React from "react";
import { Container, SubTitle } from "./ProjectProblem";
import styled from "styled-components";

export default function ProjectResult({ results, title }) {
  return (
    <Container>
      <SubTitle>{title}</SubTitle>
      <ContentContainer>
        {results?.map((result, i) => {
          return (
            <Wrapper key={i}>
              <Content style={{ alignItems: "flex-start" }}>
                <ContentImg src={result[0]?.img} />
                <ContentText style={{ textAlign: "right" }}>{result[0]?.text}</ContentText>
              </Content>
              <Content style={{ alignItems: "flex-start" }}>
                <ContentText>{result[1]?.text}</ContentText>
                <ContentImg src={result[1]?.img} />
              </Content>
            </Wrapper>
          );
        })}
      </ContentContainer>
    </Container>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;
const ContentImg = styled.img`
  width: 450px;
  /* height: 450px; */
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  width: 90%;
`;
const ContentText = styled.p`
  margin: 35px 0px 85px 0px;
  width: 500px;
  font-family: "BM-Air";
  font-size: 24px;
  line-height: 25px;
  word-break: keep-all;
`;
