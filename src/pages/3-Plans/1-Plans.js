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
import LogoPlus from "../../assets/images/Logo+Plus.svg";
import LogoBenefits from "../../assets/images/benefits.svg";
import LogoPrice from "../../assets/images/price.svg";
import { Price } from "../../constants/urls";
import ButtonBack from "../../assets/images/Back.svg";
import ButtonQuit from "../../assets/images/Quit.svg";
import { useNavigate } from "react-router-dom";
import { UrlMemberships } from "../../constants/urls";
import axios from "axios";

import { useState, useEffect } from "react";

export default function Plans({ Token, ID }) {
  const navigate = useNavigate();

  const [isConfirmation, setisConfirmation] = useState(false);
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
      console.log("res.data", res.data);
    });

    promisse.catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    });
  }, []);

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
            name="email"
            // value={form.email}
            // onChange={handleForm}
            type="text"
            placeholder="Nome impresso no cartão"
          />
          <Input
            name="email"
            // value={form.email}
            // onChange={handleForm}
            type="text"
            placeholder="Dígitos do cartão"
          />
          <InputSecurity>
            <input
              name="email"
              // value={form.email}
              // onChange={handleForm}
              type="text"
              placeholder="Código de segurança"
            />
            <input
              name="email"
              // value={form.email}
              // onChange={handleForm}
              type="text"
              placeholder="Validade"
            />
          </InputSecurity>
          <Button onClick={() => setisConfirmation(true)}>ASSINAR</Button>
        </Container>
      )}
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
      <BlackScreen isConfirmation={isConfirmation}>
        <Confirmation>
          <p>
            Tem certeza que deseja assinar o plano Driven Plus ({Price.plus})?
          </p>
          <div>
            <button onClick={() => setisConfirmation(false)}>Não</button>
            <button>Sim</button>
          </div>
        </Confirmation>
      </BlackScreen>
    </>
  );
}
