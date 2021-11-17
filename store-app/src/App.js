import "./style/App.css";
import { Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import userService from "./services/user";

import Home from "./components/Home";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import { Component } from "react";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRout";
import EditCard from "./components/editCard";
import CreateCard from "./components/create-card";
import MyCards from "./components/my-cards";
import BizSignUp from "./components/bizSignUp";
import ProductList from "./components/store";
import MyCart from "./components/cart/my-cart";
import Modul from "./components/modul";
import Footer from "./components/footer";

class App extends Component {
  state = { user: null };
  componentDidMount() {
    this.setState({
      user: userService.getCurrentUser(),
    });
  }
  render() {
    const { user } = this.state;
    return (
      <>
        <div>
          <ToastContainer />
          <header>
            {/* {user get the token key pass as props} */}
            <Navbar user={user} />
          </header>

          <main>
            <Switch>
              <ProtectedRoute
                path="/my-cards/edit/:id"
                component={EditCard}
                biz={true}
                exact
              />
              <ProtectedRoute
                path="/create-cards"
                component={CreateCard}
                biz={true}
                exact
              />
              <ProtectedRoute
                path="/my-cards"
                component={MyCards}
                biz={true}
                exact
              />
              {/* <ProtectedRoute
                path="/story"
                component={ProductList}
                biz={true}
                exact
              /> */}
              <Route path="/" component={Home} exact />
              <Route path="/sign-in" component={SignIn} exact />
              <Route path="/sign-up" component={SignUp} exact />
              <Route path="/sign-up-biz" component={BizSignUp} exact />
              <Route path="/logout" component={Logout} exact />
              {<Route path="/story" component={ProductList} exact />}
              {<Route path="/my-cart" component={MyCart} exact />}

              <Route component={PageNotFound} exact />
            </Switch>
            <Modul />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </>
    );
  }
}

export default App;
