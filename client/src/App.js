import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainNav from "./shared/components/Navigation/MainNav";
import LandingPage from "./LandingPage/LandingPage";
import FleetPage from "./Fleet/pages/FleetPage";
import OrdersPage from "./Orders/pages/OrdersPage";
import FleetSearchPage from "./Fleet/pages/FleetSearchPage";
import ThemeContextProvider from "./shared/contexts/ThemeContext";
import AuthContextProvider from "./shared/contexts/AuthContext";
import RentPage from "./Rent/pages/RentPage";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute";
import About from "./About/a";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Router>
          <MainNav />
          <Switch>
            
            <Route exact path="/" component={LandingPage} />
            <Route path="/fleet/sort/:name" component={FleetSearchPage} />
            <Route path="/fleet" component={FleetPage} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/my-orders/:id" component={OrdersPage} />
            <Route path="/rent/:id" component={RentPage} />
            <Route to="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
