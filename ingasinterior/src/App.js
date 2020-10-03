import React from 'react';
import './App.css';
import HeaderComp from './Header'
import About from './About'
import Colors from './Colors'
function App() {
  return (
    <div className="App">
     <HeaderComp/>
     <About /> <br/>
     <Colors />
    </div>
  );
}

export default App;
