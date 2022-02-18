import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

interface IState {
  people:{
    name: string;
    age: number;
    url: string;
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
   {
     name: 'LeBron James',
     url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
     age: 36,
     note:'Allergic to staying on the same team'
   }
  ]);



  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList />
    </div>
  );
}

export default App;
