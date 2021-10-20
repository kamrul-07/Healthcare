
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Component/Pages/Header/Header';
import Footer from './Component/Pages/Footer/Footer';
import Home from './Component/Pages/Home/Home';
import NotFound from './Component/Pages/NotFound/NotFound';
import About from './Component/Pages/About/About';
import Contact from './Component/Pages/Contact/Contact';
import Detailes from './Component/Pages/Home/Service/Detailes/Detailes';
import Login from './Component/Pages/Footer/Login/Login';
import Singup from './Component/Pages/Firebase/Sing up/Singup';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Component/Pages/Footer/Login/PrivateRoute/PrivateRoute';
import Teams from './Component/Pages/Footer/Login/PrivateRoute/Teams';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/detailes/:id">
        <Detailes></Detailes>
      </PrivateRoute>
        <Route path="/aboutus">
          <About></About>
        </Route>
        <PrivateRoute path="/teams">
          <Teams></Teams>
        </PrivateRoute>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <Singup></Singup>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
