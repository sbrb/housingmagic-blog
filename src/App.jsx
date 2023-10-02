import "./App.css";
import CategoryPage from "./pages/CategoryPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";



const gAMeasurementId = "G-NSX7N7K0MS";
ReactGA.initialize(gAMeasurementId);
function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Blog",
    });
  },[])
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/post" activeClassName="active">
              Post
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact component={CategoryPage} />
          <Route path="/post" component={BlogDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
