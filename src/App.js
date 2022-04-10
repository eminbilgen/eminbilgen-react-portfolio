import React, { Component, useEffect, useState, useCallback } from 'react';
import Intro  from './components/intro/Intro.jsx';
import Story from './components/content/Story.jsx';
import Contact from './components/contact/Contact.jsx';
import { Fragment } from 'react/cjs/react.production.min';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Intro />
        <Story />
        <Contact />
      </div>
    );
  }
}

export default App;