import logo from "./logo.svg";
import "./App.css";
import PostApi from "./components/postApi";
import Api from "./components/api";
import Nav from "./components/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*function App() {
  return (
    <div className="App">
      <PostApi />
    </div>
  );
}*/

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/PostApi" component={PostApi} />
          <Route path="/Api" component={Api} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
