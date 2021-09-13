import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "../src/modules/Login/Login.js";
import LayoutMain from "../src/modules/Main/Main";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login">
          <Login />
        </PublicRoute>
        <PrivateRoute path="/">
          <LayoutMain />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
export default App;
