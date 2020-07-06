import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
// import NewProject from './pages/NewProject/NewProject';
// ! import OneProject

import './App.css';
import CurrentUserContext from './contexts/currentUser';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path='/:id' render={props => (<OneProject {...props})} /> */}
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/annatokiko-login"
            render={(props) => <Login setCurrentUser={setCurrentUser} />}
          />
          {/* <Route exact path="/annatokiko-login/new" component={NewProject} /> */}
        </Switch>
      </CurrentUserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
