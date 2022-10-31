import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import {
  MainColor,
  BackgroundColor,
  TextColor,
  FormTextColor,
} from "../../constants/colors";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${BackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    padding-bottom: 100px;
    width: 299px;
    height: auto;
  }
`;

export const Input = styled.input`
  display: flex;
  height: 52px;
  width: 299px;
  margin-bottom: 16px;
  border-radius: 8px;
  background: ${TextColor};
  border: none;

  ::placeholder {
    color: ${FormTextColor};
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const Button = styled.button`
  width: 305px;
  height: 52px;
  border-radius: 8px;
  background-color: ${MainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: ${TextColor};

  margin-bottom: 24px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${TextColor};

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
`;
