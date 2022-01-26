
import './App.css';
import React, {Component} from 'react';
import { CardList } from './Components/Card-list/card-list.component';
import { SearchBox } from './Components/Search-box/Search-box.component';


class App extends Component{
  
  constructor(){
    super();
    this.state ={
      monsters : [],
      searchField :''
     }
  }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({monsters : users}))
   }
   render(){

    const {monsters , searchField} = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
     return(
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox handleChange={e => this.setState({searchField : e.target.value})} placeholder='Search monsters'/>
      <CardList monster={filteredMonster}></CardList>
    </div>
     )
   }
  
}

export default App;
