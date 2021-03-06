import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Comic from './pages/Comic';
import ShoppingCart from './pages/ShoppingCart';
import { CartProvaider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <CartProvaider>
      <Router basename={process.env.PUBLIC_URL} >
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
      <Toaster />
    </CartProvaider>
  );
};

export default App;
