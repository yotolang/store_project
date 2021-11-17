import React from "react";
import Title from "./common/PageTitle";
import Form from "./common/form";
import Joi from "joi";
import userService from "../services/user";
import { Redirect } from "react-router-dom";
import profile1 from "../images/user1.webp";
import profile3 from "../images/user3.webp";
import profile4 from "../images/user4.webp";

class Signin extends Form {
  state = {
    form: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };
  async doSubmit() {
    const { email, password } = this.state.form;
    try {
      await userService.login(email, password);
      const to = this.props.location.state?.from?.pathname ?? "/story";
      window.location = to;
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    if (userService.getCurrentUser()) {
      return <Redirect to="/story" />;
    }
    const image = <img src={profile3} alt="profile" className="email" />;
    const image1 = <img src={profile4} className="email" alt="email" />;
    return (
      <>
        <Title title="Signin " />
        <div className="formBody">
          <div className="formWrapper">
            <div className="imgs">
              <div className="container-imgs">
                <img src={profile1} alt="profile" className="profile" />
              </div>
            </div>
            <form onSubmit={this.handelSubmit} autoCapitalize="off" noValidate>
              <div className="col-12">{this.renderInput("email", "Email")}</div>
              <div className="col-12">
                {this.renderInput("password", "Password", "password")}
              </div>

              <div className="mt-2">{this.renderButton("Login")}</div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Signin;
