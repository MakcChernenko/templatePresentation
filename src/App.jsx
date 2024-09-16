import React from 'react';
import items from "./data/data.jsx"
import Accordion from '../src/components/accordeon/Accordeon.jsx';
import "./App.css"


const App = () => (
  <div className="App">
    <h1>Презентація  акордеоном</h1>
    <Accordion items={items} />
  </div>
);

export default App;