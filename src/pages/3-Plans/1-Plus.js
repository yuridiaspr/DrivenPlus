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
} from "./4-Styled";
import LogoPlus from "../../assets/images/Logo+Plus.svg";
import LogoBenefits from "../../assets/images/benefits.svg";
import LogoPrice from "../../assets/images/price.svg";
import { Price } from "../../constants/urls";
import ButtonBack from "../../assets/images/Back.svg";
import ButtonQuit from "../../assets/images/Quit.svg";

export default function Plus() {
  function IsConfirmation() {}

  return (
    <>
      <Container>
        <img alt="Logo" src={LogoPlus} />
        <p>Driven Plus</p>
        <Benefits>
          <div>
            <img alt="benefits logo" src={LogoBenefits} />
            <p>Benefícios:</p>
          </div>
          <p>1. Brindes exclusivos</p>
          <p>2. Materiais bônus de web</p>
        </Benefits>
        <PriceContainer>
          <div>
            <img alt="price logo" src={LogoPrice} />
            <p>Preco:</p>
          </div>
          <p>{Price.plus} cobrados mensalmente</p>
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
        <Button>ASSINAR</Button>
      </Container>
      <ButtonBackContainer src={ButtonBack} alt="Button Back" />
      <ButtonQuitContainer src={ButtonQuit} alt="Button Quit" />
      <BlackScreen>
        <Confirmation>
          <p>
            Tem certeza que deseja assinar o plano Driven Plus ({Price.plus})?
          </p>
          <div>
            <button>Não</button>
            <button>Sim</button>
          </div>
        </Confirmation>
      </BlackScreen>
    </>
  );
}
