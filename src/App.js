import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/1-LoginRegister/1.1-Login";
import SignUp from "./pages/1-LoginRegister/1.2-Sign-up";
import Subscriptions from "./pages/2-Subscriptions/Subscriptions";
import Plus from "./pages/3-Plans/1-Plus";
import Gold from "./pages/3-Plans/2-Gold";
import Platinum from "./pages/3-Plans/3-Platinum";
import Home from "./pages/4-Home/Home";
import { useState, createContext } from "react";

function App() {
  const UserContext = createContext();
  const tokenOnLocalStorage = localStorage.getItem("token");
  console.log(tokenOnLocalStorage);
  const [Token, setToken] = useState(tokenOnLocalStorage);

  function setAndPersistToken(TokenRecived) {
    setToken(TokenRecived);
    localStorage.setItem("token", TokenRecived);
  }

  return (
    <UserContext.Provider value={{ setToken, setAndPersistToken }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/subscriptions"
            element={<Subscriptions Token={Token} />}
          />
          <Route path="/subscriptions/1" element={<Plus Token={Token} />} />
          <Route path="/subscriptions/2" element={<Gold Token={Token} />} />
          <Route path="/subscriptions/3" element={<Platinum Token={Token} />} />
          <Route path="/home" element={<Home Token={Token} />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
