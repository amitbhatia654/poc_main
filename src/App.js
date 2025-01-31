import React from 'react';
import './App.css';
import EmailComp from 'app1/App'
import ChatComp from 'app2/App'


function App() {
  return (
    <div >
      <h2> My Main App </h2>
      <EmailComp></EmailComp>
      <ChatComp></ChatComp>
    </div>
  );
}

export default App;
