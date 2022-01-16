import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/colors";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { change } from "../store/reducers/languageReducer";
const headerList = [
  { text: "메인", path: "/" },
  { text: "포트폴리오", path: "/portfolio" },
  { text: "소개", path: "/introduce" },
  { text: "문의", path: "/contact" },
];

export default function Header() {
  const { languageReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(languageReducer);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguage = (language) => {
    console.log(language);
    dispatch(change(language));
    setAnchorEl(null);
  };
  return (
    <Container>
      <NavLink to={"/"}>
        <img alt="logo" src={"/images/logo.png"} style={{ height: "50px" }} />
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
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {languageReducer.value}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => handleLanguage("한국어")}>
            <MenuText>한국어</MenuText>
          </MenuItem>
          <MenuItem onClick={() => handleLanguage("English")}>
            <MenuText>English</MenuText>
          </MenuItem>
          <MenuItem onClick={() => handleLanguage("日本語")}>
            <MenuText style={{ fontFamily: "ヒラギノ角ゴ Pro W3" }}>日本語</MenuText>
          </MenuItem>
        </Menu>
      </NavContainer>
    </Container>
  );
}
const MenuText = styled.h1`
  font-family: "BM-Air", sans-serif, "Courier New", Courier, "ヒラギノ角ゴ Pro W3";
`;
const Container = styled.div`
  height: 60px;
  width: 80vw;
  background-color: white;
  display: flex;
  position: fixed;
  z-index: 99;
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
