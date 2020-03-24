import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import "./App.css";

import { Header } from "./components/Header";
import { CustomerList } from "./components/CustomerList";
import { AccountList } from "./components/AccountList";

export const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <nav>
          <NavLink to="/customers" className="link" activeClassName="selected">
            Customers
          </NavLink>
          <NavLink to="/accounts" className="link" activeClassName="selected">
            Accounts
          </NavLink>
        </nav>
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/customers" />
            </Route>
            <Route exact path="/customers" component={CustomerList} />
            <Route exact path="/accounts" component={AccountList} />
          </Switch>

        </main>
      </div>
    </Router>
  );
};

