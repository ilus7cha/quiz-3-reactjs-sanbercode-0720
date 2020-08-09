import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Logo from '../logo.png';
import Home from './movies';
import About from './about';
import TableMovies from "./tablemovies";
import Login from './login';
import {useAuthContext} from './authcontext';

export default function App() {
  const [{isLogin}]=useAuthContext()
  return (
    
    <Router>
      <div>
<header>
    <img id="logo" src={Logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/movie-lists">Movie List Editor</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
  </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <section>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movie-lists">
          {  isLogin ? <TableMovies /> : <Redirect to="/login"/>}
          </Route>
          <Route path="/login">
          {  isLogin ? <Redirect to="/movie-lists" /> : <Login />}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </section>
      </div>
    </Router>
  );
}