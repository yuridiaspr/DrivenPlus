import { Container, Plan } from "./SubscriptionsStyled";
import { UrlMemberships } from "../../constants/urls";
import { useState, useContext, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Subscriptions({ Token, setID }) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [Itens, setItens] = useState({});

  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };

  useEffect(() => {
    const promisse = axios.get(UrlMemberships, config);
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

  function plan(id) {
    setID(id);
    navigate(`/subscriptions/${id}`);
  }

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <Container>
          <p>Escolha seu Plano</p>
          {Itens.map((c) => (
            <Plan onClick={() => plan(c.id)}>
              <img alt="Logo" src={c.image} />
              <p>R$ {c.price}</p>
            </Plan>
          ))}
        </Container>
      )}
    </>
  );
}
