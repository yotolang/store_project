import { Component } from "react";
import userService from "../services/user";
class Logout extends Component {
  state = {};
  componentDidMount() {
    userService.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
