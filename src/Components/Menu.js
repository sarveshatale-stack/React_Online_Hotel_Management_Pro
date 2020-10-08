import React, { Component } from "react";
import "./css/Menu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Owner from "./Owner";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.loginfunction = this.loginfunction.bind(this);
  }
  // loginfunction() {
  //   console.log("role");
  //   //this.setState({ redirect: true })
  //   this.renderRedirect();
  // }
  loginfunction = () => {
    console.log("role");
    //this.setState({ redirect: true })
    this.renderRedirect();
  };
  renderRedirect = () => {
    console.log("role1");
    // window.location.hash = "#/my/target/url";
    // const history = useHistory();
    //this.props.history.push('/posts/');
    //if (this.state.redirect) {
    // return <Redirect from='/Menu/' to="/Login/" />
    //}
  };
  render() {
    return (
      <div>
        <div>
          <Router>
            <div>
              <h2>Welcome To Taj Hotel</h2>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar mr-auto">
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
                  <li>
                    <Link to={"/Login"} className="nav-link">
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>
              <hr />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/Login" component={Login} />
                <Route path="/Owner" component={Owner} />
              </Switch>
            </div>
            <div></div>
            {this.renderRedirect()}
          </Router>
        </div>
        {/* <div>
          <table>
            <tr>
              <td>
                <button className="btnforrole">
                  <img src="./img/google.png" onClick={this.loginfunction} />
                  Owner
                </button>
                <image src="/abc.jpg" />
              </td>
              <td>
                <button className="btnforrole">
                  <img src="./img/google.png" onClick={this.loginfunction} />
                  Manager
                </button>
                <image src="/abc.jpg" />
              </td>
              <td>
                <button className="btnforrole">
                  <img src="./img/google.png" onClick={this.loginfunction} />
                  Receptionist
                </button>
                <image src="/abc.jpg" />
              </td>
            </tr>
          </table>
        
        </div> */}
      </div>
    );
  }
}

export default Menu;
