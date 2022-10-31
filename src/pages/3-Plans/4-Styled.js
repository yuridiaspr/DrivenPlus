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

  p {
    color: ${TextColor};
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    padding-top: 10px;
    padding-bottom: 22px;
  }

  img {
    height: 95.13327026367188px;
    width: 139.37762451171875px;
    border-radius: 0px;
    margin-top: 87px;
  }
`;

export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 299px;
  margin-bottom: 12px;

  img {
    height: 100%;
    width: auto;
    border-radius: 0px;
    padding-right: 5px;
    margin: 0px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 10px;

    p {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: ${TextColor};
      padding: 0;
    }
  }

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${TextColor};
    padding: 0;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 299px;
  margin-bottom: 34px;

  img {
    height: 100%;
    width: auto;
    border-radius: 0px;
    padding-right: 5px;
    margin: 0px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 4px;

    p {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: ${TextColor};
      padding: 0;
    }
  }

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${TextColor};
    padding: 0;
  }
`;

export const Input = styled.input`
  display: flex;
  height: 52px;
  width: 299px;
  margin-bottom: 8px;
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

export const InputSecurity = styled.div`
  display: flex;
  height: 52px;
  width: 302px;
  margin-bottom: 12px;
  justify-content: space-between;

  input {
    height: 52px;
    border-radius: 8px;
    background: ${TextColor};
    border: none;
    width: 142px;
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

export const ButtonBackContainer = styled.img`
  position: absolute;
  height: 27.29375648498535px;
  width: 28.003116607666016px;
  border-radius: 0px;

  left: 22px;
  top: 25px;
`;

export const ButtonQuitContainer = styled.img`
  position: absolute;
  height: 24.5px;
  width: 28px;
  border-radius: 0px;

  right: 20px;
  top: 25px;
  z-index: 2;
`;

export const BlackScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const Confirmation = styled.div`
  background-color: ${TextColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 210px;
  width: 248px;
  border-radius: 12px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  p {
    margin-top: 34px;
    margin-bottom: 47px;
    width: 204px;
  }

  button {
    width: 95px;
    height: 52px;
    border-radius: 8px;
    border: none;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: ${TextColor};
  }

  div {
    width: 204px;
    display: flex;
    justify-content: space-between;

    button {
      :nth-child(1) {
        background-color: ${ButtonNo};
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
      }

      :nth-child(2) {
        background-color: ${MainColor};
      }
    }
  }
`;
