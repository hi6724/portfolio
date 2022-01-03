import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/colors";
const headerList = [
  { text: "메인", path: "/" },
  { text: "포트폴리오", path: "/portfolio" },
  { text: "소개", path: "/introduce" },
  { text: "문의", path: "/contact" },
];

export default function Header() {
  return (
    <Container>
      <NavLink to={"/"}>
        <img src={"/images/logo.png"} style={{ height: "10vh" }} />
      </NavLink>
      <NavContainer>
        {headerList.map((header, index) => (
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "black" : colors.gray,
                fontWeight: isActive ? "600" : "",
              };
            }}
            to={header.path}
            key={index}
          >
            <NavText className={({ isActive }) => "nav-link" + (!isActive ? " unselected" : "")}>{header.text}</NavText>
          </NavLink>
        ))}
      </NavContainer>
    </Container>
  );
}

export const Container = styled.div`
  height: 10vh;
  width: 80vw;
  background-color: white;
  display: flex;
  top: 0;
  justify-content: space-between;
  padding: 0px 10vw;
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const NavText = styled.span`
  font-family: "BM-Air";
  :hover {
    color: ${colors.purple};
    font-weight: 600;
  }
`;
