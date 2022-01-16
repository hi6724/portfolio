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
  width: 20vw;
  border-bottom: min(0.5vh, 0.5vw) solid;
`;
const Year = styled.h1`
  font-family: "BM-Air";
  font-size: 1.5vw;
`;
const BigText = styled.h1`
  font-family: "BM-Air";
  font-size: min(3vw);
`;

const Portfolio = styled(Link)`
  color: ${colors.gray};
  font-size: min(2vw);
  font-family: "BM-Air";
  text-decoration: none;
  :hover {
    color: ${colors.link};
  }
`;

const Image = styled.img`
  width: min(15vw);
  border-radius: 15vw;
  margin-right: 25px;
`;

const Card = styled.div`
  height: min(10vw);
  width: min(35vw);
  border-radius: 15px;
  background-color: white;
  padding: min(5vw);
  display: flex;
  align-items: center;
`;
const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("/images/japan.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
