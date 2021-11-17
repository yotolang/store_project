import { Redirect, Route } from "react-router-dom";
import userService from "../../services/user";

const ProtectedRoute = ({ component: Component, render, biz, ...rest }) => {
  //get the jwt token
  const currentUser = userService.getCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser || (biz && !currentUser.biz)) {
          return (
            <Redirect
              to={{ pathname: "/sign-in", state: { from: props.location } }}
            />
          );
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
