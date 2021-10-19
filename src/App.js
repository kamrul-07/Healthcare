
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Component/Pages/Header/Header';
import Footer from './Component/Pages/Footer/Footer';
import Home from './Component/Pages/Home/Home';
import NotFound from './Component/Pages/NotFound/NotFound';
import About from './Component/Pages/About/About';
import Contact from './Component/Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
      
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/aboutus">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
