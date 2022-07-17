import logo from './logo.svg';
import './App.css';
import {getFullName} from "./fullName.js";
import React from 'react';


function App() {
  return (
    React.createElement("div", {class: "App"}, 
      React.createElement("header", {class: "App-header"}, 
        React.createElement("img", {src: logo, class: "App-logo"}),
        React.createElement("p", null, getFullName()),
        React.createElement("a", {class: "App-link", href: "https://reactjs.org", target: "_blank",
        rel: "noopener noreferrer"}, "Learn React")
    ))

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo"  />
    //     <p>
    //       {getFullName()}
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
