import { Container, Input, Button, StyledLink } from "./1.3-Styled";

function login() {
  // const URL = "https://mock-api.driven.com.br/api/v2/camppi/auth/login"
  // const promise = axios.post(URL, form)
  // promise.then((res) => {
  //   setToken(res.data.token)
  //   setUser(res.data)
  //   navigate("/market")
  // })
  // promise.catch((err) => alert(err.response.data.message))
}

export default function SignUp() {
  return (
    <Container>
      <Input
        name="name"
        // value={form.name}
        // onChange={handleForm}
        type="text"
        placeholder="Nome"
      />
      <Input
        name="CPF"
        // value={form.image}
        // onChange={handleForm}
        type="text"
        placeholder="CPF"
      />
      <Input
        name="email"
        // value={form.email}
        // onChange={handleForm}
        type="text"
        placeholder="E-mail"
      />
      <Input
        name="password"
        // value={form.password}
        // onChange={handleForm}
        type="password"
        placeholder="Senha"
      />
      <Button onClick={login}>Entrar</Button>
      <StyledLink to="/">Não possui uma conta? Cadastre-se</StyledLink>
    </Container>
  );
}
