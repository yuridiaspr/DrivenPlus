import {
  Container,
  Benefits,
  PriceContainer,
  Input,
  InputSecurity,
  Button,
  ButtonBackContainer,
  ButtonQuitContainer,
  BlackScreen,
  Confirmation,
} from "./2-Styled";
import LogoBenefits from "../../assets/images/benefits.svg";
import LogoPrice from "../../assets/images/price.svg";
import { Price } from "../../constants/urls";
import ButtonBack from "../../assets/images/Back.svg";
import ButtonQuit from "../../assets/images/Quit.svg";
import { useNavigate } from "react-router-dom";
import { UrlMemberships, UrlSubscriptions } from "../../constants/urls";
import axios from "axios";

import { useState, useEffect } from "react";

export default function Plans({ Token, ID }) {
  const navigate = useNavigate();

  const [isConfirmation, setisConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    membershipId: 1,
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [Itens, setItens] = useState({});

  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };

  useEffect(() => {
    const URL = `${UrlMemberships}/${ID}`;
    const promisse = axios.get(URL, config);
    setIsLoading(true);

    promisse.then((res) => {
      setIsLoading(false);
      setItens(res.data);
    });

    promisse.catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    });
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function Buy(e) {
    e.preventDefault();
    console.log("event", e);
    const URL = UrlSubscriptions;
    const promise = axios.post(URL, formData, config);
    setIsLoading(true);
    promise.then((res) => {
      setIsLoading(false);
      console.log("res.data", res.data);
      navigate("/home");
    });
    promise.catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
      alert(err.response.data.details);
    });
  }

  function Volver() {
    navigate("/subscriptions");
  }

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <Container>
          <img alt="Logo" src={Itens.image} />
          <p>{Itens.name}</p>
          <Benefits>
            <div>
              <img alt="benefits logo" src={LogoBenefits} />
              <p>Benefícios:</p>
            </div>
            {Itens.perks.map((c) => (
              <p>
                {c.id}. {c.title}
              </p>
            ))}
          </Benefits>
          <PriceContainer>
            <div>
              <img alt="price logo" src={LogoPrice} />
              <p>Preco:</p>
            </div>
            <p>R$ {Itens.price} cobrados mensalmente</p>
          </PriceContainer>
          <Input
            type="text"
            placeholder="Nome"
            name="cardName"
            onChange={handleChange}
            value={formData.cardName}
            disabled={isLoading}
            // required
          />
          <Input
            type="number"
            placeholder="Dígitos do cartão"
            name="cardNumber"
            onChange={handleChange}
            value={formData.cardNumber}
            disabled={isLoading}
            // required
          />
          <InputSecurity>
            <input
              type="number"
              placeholder="Código de segurança"
              name="securityNumber"
              onChange={handleChange}
              value={formData.securityNumber}
              disabled={isLoading}
              // required
            />
            <input
              type="date"
              placeholder="validade"
              name="expirationDate"
              onChange={handleChange}
              value={formData.expirationDate}
              disabled={isLoading}
              // required
            />
          </InputSecurity>
          <Button onClick={() => setisConfirmation(true)}>ASSINAR</Button>
        </Container>
      )}
      <BlackScreen isConfirmation={isConfirmation}>
        <Confirmation>
          <p>
            Tem certeza que deseja assinar o plano Driven Plus (R$ {Itens.price}
            )?
          </p>
          <div>
            <button onClick={() => setisConfirmation(false)}>Não</button>
            <button onClick={(e) => Buy(e)}>Sim</button>
          </div>
        </Confirmation>
      </BlackScreen>
      <ButtonBackContainer
        onClick={() => Volver()}
        src={ButtonBack}
        alt="Button Back"
      />
      <ButtonQuitContainer
        isConfirmation={isConfirmation}
        onClick={() => setisConfirmation(false)}
        src={ButtonQuit}
        alt="Button Quit"
      />
    </>
  );
}
