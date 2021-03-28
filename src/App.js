import React from "react";
import "./scss/main.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ErrorPage from "./components/ErrorPage";
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
          <div className="app">
              <nav>
                      <div className="nav">
                          <li className="nav__li"><NavLink to="/Login" exact>Zaloguj  </NavLink></li>
                          <li className="nav__li"><NavLink to="/Registration">Załóż konto </NavLink></li>
                      </div>
              </nav>
              <section className="section">
                  <Switch>
                      <Route path="/" exact component={Home}/>
                      <Route path="/Login" component={Login}/>
                      <Route path="/Registration" component={Registration}/>
                      <Route component={ErrorPage}/>
                  </Switch>
              </section>
          </div>
      </BrowserRouter>
  )
}

export default App;
