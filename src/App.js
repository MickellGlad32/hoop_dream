import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import StatsPage from './pages/StatsPage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path ='/search'>
          <SearchPage/>
        </Route>
        <Route path = '/stats/:id'>
          <StatsPage/>
        </Route>
      </Switch>

    </div>

    </Router>
  );
}

export default App;


