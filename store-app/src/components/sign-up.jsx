import React from "react";
import Form from "./common/form";
import Title from "./common/PageTitle";
import Joi from "joi";
import { toast } from "react-toastify";
import { createUser } from "../services/user";
import profile1 from "../images/user1.webp";

class SignUp extends Form {
  state = {
    form: {
      email: "",
      password: "",
      name: "",
    },
  };
  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
    name: Joi.string().required().min(2),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: false };

    try {
      const user = await createUser(body);
      toast.info("A new account is open ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.props.history.replace("/sign-in");
      console.log("creat user", user);
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.date } });
      }
    }
  }
  render() {
    return (
      <>
        <Title title="Signup for Real app" />
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

              {this.renderInput("name", "Name")}
              <div className="mt-2">{this.renderButton("Sign up")}</div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
