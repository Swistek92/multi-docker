import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>hello AWS world </h1>
        <img
          className='img'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/480px-The_Blue_Marble_%28remastered%29.jpg'
          alt='world'
        />
        <br />
        <Link to='/'>Home</Link>
        <br />
        <Link to='/otherpage'>Other Page</Link>

        <div>
          <Route exact path='/' component={Fib} />
          <Route path='/otherpage' component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
