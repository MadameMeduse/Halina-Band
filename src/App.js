import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Header } from "components/Header";
import { Home } from "pages/Home";
import { MyProfile } from "pages/MyProfile";

import { GlobalStyle, theme } from "./styles";

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Normalize />
      <GlobalStyle />
      <Header />

      <Switch>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </BrowserRouter>
  </ThemeProvider>
);
