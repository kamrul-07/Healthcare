
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Component/Pages/Header/Header';
import Footer from './Component/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
        <Route path="/home">

        </Route>

      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
