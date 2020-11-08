import React from "react";
//import "./styles/style1.css"
import "./styles/style2.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


export default function BasicExample(props) {
  return (
    <div>
      <Router>
        <div>
          <ul className="header">
            <li>
              <NavLink exact activeClassName="selected" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>

          <h2>{props.overskrift}</h2>
          <hr />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
