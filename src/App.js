import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link className="btn btn-primary sz" to="/">Find</Link>
            <Link className="btn btn-primary sz" to="/add">Add</Link>
          </nav>

          <Switch>
            <Route path="/">
              <Add />
            </Route>
          </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
