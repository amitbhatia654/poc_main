import React from 'react';
import './App.css';
import ChatComp from 'app2/App'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './container/HomePage.jsx';
import EmailComponent from './container/EmailComponent.jsx';


function App() {
  return (
    < >
      <BrowserRouter>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Micro-Frontend </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item active">
                <Link className="nav-link" to='/'>Main App</Link>
              </li> */}
              <li className="nav-item active">
                <Link className="nav-link" to='/'>Email</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/chat'>Chat App</Link>
              </li>

            </ul>
          </div>
        </nav>

        <Routes>
          {/* <Route path='/' element={<HomePage></HomePage>}></Route> */}
          <Route path='/' element={<EmailComponent />}></Route>
          <Route path='/chat' element={<ChatComp />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
