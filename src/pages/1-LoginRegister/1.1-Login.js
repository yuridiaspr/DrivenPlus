import { Container, Input, Button, StyledLink } from "./1.3-Styled";
import Logo from "../../assets/images/Logo.svg";
import { UrlLogin } from "../../constants/urls";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ setToken }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function login() {
    const URL = UrlLogin;
    const promise = axios.post(URL, formData);
    setIsLoading(true);
    promise.then((res) => {
      setIsLoading(false);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      console.log("res.data.membership", res.data.membership);

      if (res.data.membership == null) {
        navigate("/subscriptions");
      } else {
        navigate("/home");
      }
    });
    promise.catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
      alert(err.response.data.details);
    });
  }

  return (
    <Container>
      <img alt="logo" src={Logo} />
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
      <Button onClick={login}>{isLoading ? "Loading" : "Entrar"}</Button>
      <StyledLink to="/sign-up">Não possui uma conta? Cadastre-se</StyledLink>
    </Container>
  );
}
