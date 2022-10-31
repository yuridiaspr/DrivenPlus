import { Container, Input, Button, StyledLink } from "./1.3-Styled";
import { UrlRegister } from "../../constants/urls";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cpf: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function Register() {
    const URL = UrlRegister;
    setIsLoading(true);
    const promise = axios.post(URL, formData);
    promise.then((res) => {
      setIsLoading(false);
      navigate("/");
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    });
    promise.catch((err) => alert(err.response.data.details));
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Nome"
        name="name"
        onChange={handleChange}
        value={formData.name}
        disabled={isLoading}
        required
      />
      <Input
        type="number"
        placeholder="CPF"
        name="cpf"
        onChange={handleChange}
        value={formData.cpf}
        disabled={isLoading}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={handleChange}
        value={formData.email}
        disabled={isLoading}
        required
      />
      <Input
        type="password"
        placeholder="Senha"
        name="password"
        onChange={handleChange}
        value={formData.password}
        disabled={isLoading}
        required
      />
      <Button onClick={Register}> {isLoading ? "Loading" : "Cadastrar"}</Button>
      <StyledLink to="/">Já tem uma conta? Faça o login</StyledLink>
    </Container>
  );
}
