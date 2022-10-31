import styled from "styled-components";
import {
  MainColor,
  BackgroundColorInside,
  TextColor,
  FormTextColor,
} from "../../constants/colors";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${BackgroundColorInside};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${TextColor};
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    padding-top: 29px;
    padding-bottom: 24px;
  }

  img {
    padding-bottom: 100px;
    width: 299px;
    height: auto;
  }
`;

export const Plan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 290px;
  height: 180px;
  border: 3px solid ${FormTextColor};
  border-radius: 12px;

  margin-bottom: 10px;

  img {
    height: 95.13327026367188px;
    width: 139.37762451171875px;
    border-radius: 0px;
    padding: 0px 20px 0px 0px;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: ${TextColor};
  }
`;
