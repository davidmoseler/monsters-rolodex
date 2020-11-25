import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { Search } from './components/search/search.component.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(
      monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder="search monsters"
          handleChange={e => this.setState({searchField: e.target.value})}
        ></Search>
          <CardList monsters={filteredMonsters}>
          </CardList>
      </div>
    );
  }
}

export default App;
