import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/colors";
const headerList = [
  { text: "메인", path: "/" },
  { text: "포트폴리오", path: "/portfolio" },
  { text: "소개", path: "/introduce" },
  { text: "문의", path: "/connect" },
];

export default function Header() {
  const location = useLocation();
  return (
    <Container>
      <NavLink to={"/"}>
        <img src={"/images/logo.png"} style={{ width: 250 }} />
      </NavLink>
      <NavContainer>
        {headerList.map((header, index) => (
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "tomato" : "rgba(0,0,0,0.5)",
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
  display: flex;
  justify-content: space-between;
  padding: 5px 10vw;
`;

const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const NavText = styled.span`
  transition: all 0.2s;
  font-family: "BM-Air";
  :hover {
    color: tomato;
    font-weight: 600;
  }
`;
