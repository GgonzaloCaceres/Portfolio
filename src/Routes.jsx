import { Route, Switch } from "wouter";
import HomePage from "./pages/HomePage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
