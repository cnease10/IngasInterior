import React from 'react';
import './App.css';
import HeaderComp from './Header'
import Tabs from './Tabs'
import About from './About'
import Colors from './Colors'
function App() {
  return (
    <div className="App">
     <HeaderComp/>
     <Tabs/>
     <About /> <br/>
     <Colors />
    </div>
  );
}

export default App;
