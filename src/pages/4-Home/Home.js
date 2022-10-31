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

export default function Home() {
  function NotYet() {
    alert("Função não implementada ainda!");
  }

  return (
    <Container>
      <Header>
        <HeaderTop>
          <img src={LogoPlus} alt="Logo" />
          <img src={LogoUser} alt="Logo user" />
        </HeaderTop>
        <WelcomeName>Olá, fulano</WelcomeName>
      </Header>

      <AllOptions>
        <div>
          <Button onClick={NotYet}>Solicitar brindes</Button>
          <Button onClick={NotYet}>Materiais bônus de web</Button>
          <Button onClick={NotYet}>Aulas bônus de tech</Button>
          <Button onClick={NotYet}>Mentorias personalizadas</Button>
        </div>
        <div>
          <Button>Mudar plano</Button>
          <Button>Cancelar plano</Button>
        </div>
      </AllOptions>
    </Container>
  );
}
