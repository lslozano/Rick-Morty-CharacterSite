import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Character from './components/Character';
import NotFound from './components/NotFound';
import { 
  BrowserRouter as Router, 
  Switch, Route 
} from 'react-router-dom';

function App() {
  return (
    // Router - Renders out the component based on the URL.
    <Router>
      <Navbar />
      {/* Switch - stops at first url match.*/}
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/characters" component={Characters}/>
          {/* Using colon and a name means it is a parameter. It receives an argument. */}
          <Route exact path="/characters/:id" component={Character}/>
        </Switch>
        <Route component={NotFound} />
      </div>
    </Router>
  );
}

export default App;
