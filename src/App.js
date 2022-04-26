import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/product/:productId"  component={ProductDetail} />
          <Route exact path="/" component={ProductListing} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
