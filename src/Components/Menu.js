import React, { Component } from "react";
import "./css/Menu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
class Menu extends Component {
  render() {
    return (
      <div>
        <div className="divformaincontent">
          <Router>
            <div>
              <h2>Welcome To Taj Hotel</h2>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                  <li>
                    <Link to={"/"} className="nav-link">
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about"} className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"} className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <hr />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
            <div></div>
          </Router>
        </div>
        <div>
          <table>
            <tr>
              <td>
                <button className="btnforrole">
                  <img src="./img/google.png" onClick={this.myfunction} />
                  Owner
                </button>
                <image src="/abc.jpg" />
              </td>
              <td>
                <button className="btnforrole">
                  <img src="./img/google.png" onClick={this.myfunction} />
                  Manager
                </button>
                <image src="/abc.jpg" />
              </td>
              <td>
                <button className="btnforrole">
                  <img src="./img/google.png" onClick={this.myfunction} />
                  Receptionist
                </button>
                <image src="/abc.jpg" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Menu;
