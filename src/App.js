import { React, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Theme from "./components/Theme";
import GlobalStyle from "./style/GlobalStyle";
import Join from "./components/Join";
import Chat from "./components/Chat";
import Chatroom from "./components/Chatroom";

import Toggler from "./components/Toggler";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider
      theme={theme === "light" ? Theme.lightTheme : Theme.darkTheme}
    >
      <>
        <GlobalStyle />
        <Toggler onClick={themeToggler} />
        <Router>
          <Route path="/" exact component={Join} />
          <Route path="/chat" component={Chat} />
          <Route path="/chatroom" component={Chatroom} />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
