import { Container, Plan } from "./SubscriptionsStyled";
import LogoPlus from "../../assets/images/Logo+Plus.svg";
import LogoGold from "../../assets/images/Logo+Gold.svg";
import LogoPlatinum from "../../assets/images/Logo+Platinum.svg";
import { ColorPlus, ColorGold, ColorPlatinum } from "../../constants/colors";
import { Price } from "../../constants/urls";

import { useNavigate } from "react-router-dom";

export default function Subscriptions() {
  const navigate = useNavigate();

  function plan1() {
    navigate("/subscriptions/1");
  }

  function plan2() {
    navigate("/subscriptions/2");
  }

  function plan3() {
    navigate("/subscriptions/3");
  }

  return (
    <Container>
      <p>Escolha seu Plano</p>
      <Plan onClick={plan1}>
        <img alt="Logo Plus" src={LogoPlus} />
        <p>{Price.plus}</p>
      </Plan>
      <Plan onClick={plan2}>
        <img alt="Logo Gold" src={LogoGold} />
        <p>{Price.gold}</p>
      </Plan>
      <Plan onClick={plan3}>
        <img alt="Logo Platinum" src={LogoPlatinum} />
        <p>{Price.platinum}</p>
      </Plan>
    </Container>
  );
}
