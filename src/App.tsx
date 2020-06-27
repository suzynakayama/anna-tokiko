import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
// ! import OneProject

import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Main} />
        {/* <Route exact path='/:id' render={props => (<OneProject {...props})} /> */}
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
