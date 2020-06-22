import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Characters from './components/Characters';
import Character from './components/Character'
import { 
  BrowserRouter as Router, 
  Switch, Route 
} from 'react-router-dom';

function App() {
  return (
    // Router - Renders out the component based on the URL.
    <Router>
      <div className="App">
        <Nav />
        {/* Switch - stops at first url match.*/}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/characters" component={Characters}/>
          {/* Using colon and a name means it is a parameter. It receives an argument. */}
          <Route exact path="/characters/:id" component={Character}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
