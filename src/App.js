import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import StatsPage from './pages/StatsPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import {motion} from 'framer-motion'
import { Provider } from 'react-redux';
import store from './redux/store';


function App({Component, pageProps, router}) {
  return (
    <Provider store={store}>
    <Router>
      {/* <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1
        }
      }}> */}
    
      <Switch>
      <div className="App">
        {/* <Component {...pageProps} /> */}
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route path ='/search'>
          <SearchPage/>
        </Route>
        <Route path = '/stats/:id'>
          <StatsPage/>
        </Route>
        </div>
      </Switch>
    
      {/* </motion.div> */}
    </Router>
    </Provider>
  );
}

export default App;


