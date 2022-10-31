import {
  AllOptions,
  Button,
  Container,
  Header,
  HeaderTop,
  WelcomeName,
} from "./HomeStyled";
import LogoPlus from "../../assets/images/Logo+Plus.svg";
import LogoBenefits from "../../assets/images/benefits.svg";
import LogoPrice from "../../assets/images/price.svg";
import LogoUser from "../../assets/images/UserLogo.svg";
import { Price } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { UrlMemberships, UrlSubscriptions } from "../../constants/urls";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home({ Token, ID, Name }) {
  const navigate = useNavigate();
  console.log("ID chegando em HOME", ID);

  const [isLoading, setIsLoading] = useState(false);
  const [Itens, setItens] = useState({});

  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };

  useEffect(() => {
    const URL = `${UrlMemberships}/${ID}`;
    // console.log("URL", URL);
    // const promisse = axios.get(URL, config);
    // setIsLoading(true);

    // promisse.then((res) => {
    //   setIsLoading(false);
    //   setItens(res.data);
    // });

    // promisse.catch((err) => {
    //   alert(err.response.data.message);
    //   setIsLoading(false);
    // });
  }, []);

  console.log(Itens);

  const RequestData = {
    id: 1,
    name: "Driven Plus",
    image: "https://svgshare.com/i/dSP.svg",
    price: "39.99",
    perks: [
      {
        id: 1,
        membershipId: 1,
        title: "Solicitar brindes",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        id: 2,
        membershipId: 1,
        title: "Materiais bônus de web",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
  };

  function Unsubscribe() {
    console.log("Entrei");
    const URL = UrlSubscriptions;
    const promisse = axios.delete(URL, RequestData, config);
    setIsLoading(true);

    promisse.then((res) => {
      setIsLoading(false);
      console.log("res.data", res.data);
    });

    promisse.catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    });
    navigate("/subscriptions");
  }

  return (
    <Container>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Header>
            <HeaderTop>
              <img src={RequestData.image} alt="Logo" />
              <img src={LogoUser} alt="Logo user" />
            </HeaderTop>
            <WelcomeName>Olá, {Name}</WelcomeName>
          </Header>

          <AllOptions>
            <div>
              {RequestData.perks.map((c) => (
                <Button href={c.link}>{c.title} brindes</Button>
              ))}
            </div>
            <div>
              <Button onClick={() => navigate("/subscriptions")}>
                Mudar plano
              </Button>
              <Button onClick={() => Unsubscribe()}>Cancelar plano</Button>
            </div>
          </AllOptions>
        </>
      )}
    </Container>
  );
}
