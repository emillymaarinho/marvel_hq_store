import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './components/routes/PublicRoute';
import NavBar from './components/layout/NavBar';
import Home from './pages/Home';
import Footer from './components/layout/Footer';


function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <PublicRoute exact path="/" >
          <Home />
        </PublicRoute>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
