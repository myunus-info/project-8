import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Header from "./components/Header/Header";
import SportsDets from "./components/SportsDets/SportsDets";
import HeaderInner from "./components/HeaderInner/HeaderInner";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/home">
          <Header />
          <Home />
        </Route>
        <Route path="/sport/:sportId">
          <HeaderInner />
          <SportsDets />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
