import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ScreenLayout from "../components/ScreenLayout";
import { colors } from "../utils/colors";

export default function Home() {
  return (
    <ScreenLayout>
      <HomeContainer>
        <Card>
          <Image src={"/images/v.jpg"} />
          <div>
            <Year>Since 2022</Year>
            <BigText>프론트앤드 &#38; </BigText>
            <BigText style={{ fontWeight: "600" }}>리액트</BigText>
            <Divider></Divider>
            <Portfolio to={"/portfolio"}>포트폴리오 보기 &gt;</Portfolio>
          </div>
        </Card>
      </HomeContainer>
    </ScreenLayout>
  );
}
const Divider = styled.div`
  margin: 15px 0px;
  width: min(30vh, 30vw);
  border-bottom: min(0.5vh, 0.5vw) solid;
`;
const Year = styled.h1`
  font-family: "BM-Air";
  font-size: min(3vw, 3vh);
`;
const BigText = styled.h1`
  font-family: "BM-Air";
  font-size: min(6vw, 6vh);
`;

const Portfolio = styled(Link)`
  color: ${colors.gray};
  font-size: min(4vw, 4vh);
  font-family: "BM-Air";
  text-decoration: none;
  :hover {
    color: ${colors.link};
  }
`;

const Image = styled.img`
  width: min(30vh, 30vw);
  border-radius: 15px;
  margin-right: 25px;
`;

const Card = styled.div`
  height: min(35vh, 35vw);
  width: min(70vh, 70vw);
  border-radius: 15px;
  background-color: white;
  padding: min(5vh, 5vw);
  display: flex;
  align-items: center;
`;
const HomeContainer = styled.div`
  height: 90vh;
  width: 100vw;
  background-image: url("/images/japan.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
