import React, { Component } from "react"
import { Normalize } from "styled-normalize"
import GlobalStyle from "./GlobalStyle"
import Login from "pages/Login"
import Home from "pages/Home"
import Profile from "pages/Profile"
import Todos from "pages/Todos"
import Registration from "pages/Registration"
import { BrowserRouter, Route, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
        <Normalize />
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/todos" component={Todos} />
            <Route path="/register" component={Registration} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
