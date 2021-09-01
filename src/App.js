import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
// import './SearchPage.css';

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
      </Switch>

    </div>

    </Router>
  );
}

export default App;


