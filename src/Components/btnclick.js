import React, { Component } from "react";
class LoginLayout extends Component {
  constuctor() {
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
    this.state = { page_number: 0 };
  }

  handlePageChange() {
    window.location.hash = "#/Demo";
  }

  handleRouteChange(event) {
    const destination = event.newURL;
    // check the URL string, or whatever other condition, to determine
    // how to set internal state.
    //if (some_condition) {
    this.setState({ page_number: 1 });
    //}
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.handleRouteChange, false);
  }

  render() {
    // @TODO: check this.state.page_number and render the correct page.
    return (
      <div className="app flex-row align-items-center">
        <button
          color="primary"
          className="px-4"
          onClick={this.handlePageChange}
        >
          Login
        </button>

        <button color="link" className="px-0">
          Forgot password{" "}
        </button>
      </div>
    );
  }
}
export default LoginLayout;
