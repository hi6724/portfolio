import React, { useState } from "react";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";

export default function Introduce() {
  return (
    <ScreenLayout>
      <Container>
        <Wrapper>
          <AvatarContainer>
            <AvatarText>About Me</AvatarText>
            <Avatar src={"/images/v.jpg"}></Avatar>
          </AvatarContainer>
          <IntroduceList>
            <ListItem category={"이름"} texts={["하훈목"]} />
            <ListItem category={"나이"} texts={["27세"]} />
            <ListItem category={"학력"} texts={["일본 소카대학교 ", "정보시스템공학과 졸업 (2022.3.18)"]} />
            {/* <ListItem category={"경력"} texts={["해당사항 없음"]} /> */}
            <ListItem category={"자격증"} texts={["JLPT 1급, JPT 880점", "정보처리기사"]} />
            <ListItem category={"보유스킬"} texts={["React, ReactNative,", "GraphQL, Express, Python"]} />
          </IntroduceList>
        </Wrapper>
      </Container>
    </ScreenLayout>
  );
}
const ListItem = ({ category, texts }) => (
  <li>
    <div style={{ lineHeight: "35px", display: "flex", fontFamily: "BM-Air", fontWeight: 600 }}>
      <div style={{ width: "100px", display: "flex", justifyContent: "flex-end" }}>{category} :&nbsp;</div>
      <div>
        {texts?.map((text, i) => (
          <h1 style={{}} key={i}>
            {text}
          </h1>
        ))}
      </div>
    </div>
  </li>
);
const AvatarText = styled.h1`
  position: absolute;
  font-size: 38px;
  font-family: "BM-Pro";
  color: #425a73;
  transform: rotateZ(-45deg);
  top: 75px;
  right: 288px;
`;
const IntroduceList = styled.ul`
  color: black;
  font-size: 21px;
  width: 50%;
`;
const AvatarContainer = styled.div`
  background-color: #e2f2fc;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 80%;
  align-items: center;
  position: relative;
`;
const Avatar = styled.img`
  width: 350px;
  height: 350px;
  margin-right: 40px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  align-items: center;
  /* background-color: yellow; */
  display: flex;
  gap: 50px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
