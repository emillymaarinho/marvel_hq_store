import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import Comic from './pages/Comic';
import ShoppingCart from './pages/ShoppingCart';

function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <PublicRoute exact path="/" >
          <Home />
        </PublicRoute>
        <PublicRoute exact path="/comic/:id" >
          <Comic />
        </PublicRoute>
        <PublicRoute exact path="/buy">
          <ShoppingCart />
        </PublicRoute>
      </Switch>
    </Router>
  );
};

export default App;
