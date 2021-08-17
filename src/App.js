import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Business from './components/pages/Business';
import ID from './components/pages/ID'
import Education from './components/pages/Education'
import Promotional from './components/pages/Promotional'
import Publications from './components/pages/Publications'
import Campaign from './components/pages/Campaign'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Press-Services-React-Website' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/ID' component={ID}/>
          <Route path='/Business' component={Business}/>
          <Route path='/Education' component={Education}/>
          <Route path='/Promotional' component={Promotional}/>
          <Route path='/Publications' component={Publications}/>
          <Route path='/Campaign' component={Campaign}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
