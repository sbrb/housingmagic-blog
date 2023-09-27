import "./App.css";
import CategoryPage from "./pages/CategoryPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";


function App() {
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
