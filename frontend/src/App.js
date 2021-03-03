import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';


function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/create" exact component={Create} />
      </div>
      

    </Router>
  );
}

export default App;
