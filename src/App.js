import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/1-LoginRegister/1.1-Login";
import SignUp from "./pages/1-LoginRegister/1.2-Sign-up";
import Subscriptions from "./pages/2-Subscriptions/Subscriptions";
import Plans from "./pages/3-Plans/1-Plans";
import Home from "./pages/4-Home/Home";
import { useState, createContext } from "react";

function App() {
  const UserContext = createContext();
  const tokenOnLocalStorage = localStorage.getItem("token");
  console.log(tokenOnLocalStorage);

  const [Token, setToken] = useState(tokenOnLocalStorage);
  const [ID, setID] = useState(1);
  const [Name, setName] = useState("Fulano");

  function setAndPersistToken(TokenRecived) {
    setToken(TokenRecived);
    localStorage.setItem("token", TokenRecived);
  }

  return (
    <UserContext.Provider value={{ setToken, setAndPersistToken }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={
              <Login setToken={setToken} setID={setID} setName={setName} />
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/subscriptions"
            element={<Subscriptions Token={Token} setID={setID} />}
          />
          <Route
            path="/subscriptions/1"
            element={<Plans Token={Token} ID={ID} />}
          />
          <Route
            path="/subscriptions/2"
            element={<Plans Token={Token} ID={ID} />}
          />
          <Route
            path="/subscriptions/3"
            element={<Plans Token={Token} ID={ID} />}
          />
          <Route path="/home" element={<Home Token={Token} Name={Name} />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
