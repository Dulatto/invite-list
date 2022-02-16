import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [people, setPeople] = useState([{
    name: 'LeBron James',
    url: '',
    age: 36,
    note: 'Allergic to staying on the same team'
  }])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
    </div>
  );
}

export default App;
