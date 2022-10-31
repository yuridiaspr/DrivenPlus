import styled from "styled-components";
import {
  MainColor,
  BackgroundColorInside,
  TextColor,
  FormTextColor,
  ButtonNo,
} from "../../constants/colors";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${BackgroundColorInside};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderTop = styled.div`
  margin-top: 22px;
  display: flex;
  width: 80%;
  height: 60px;
  justify-content: space-between;
  img {
    :nth-child(1) {
      margin-top: 10px;
      height: 50.866729736328125px;
      width: 74.52371215820312px;
      border-radius: 0px;
    }

    :nth-child(2) {
      height: 32.9375px;
      width: 34px;
      border-radius: 0px;
    }
  }
`;

export const WelcomeName = styled.div`
  margin-top: 12px;
  color: ${TextColor};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

export const AllOptions = styled.div`
  height: calc(100vh - 176px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 4px;
`;

export const Button = styled.a`
  width: 299px;
  height: 52px;
  border-radius: 8px;
  background-color: ${MainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  :link {
    text-decoration: none;
  }

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: ${TextColor};

  margin-bottom: 8px;
`;
