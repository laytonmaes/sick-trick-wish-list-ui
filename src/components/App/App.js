import { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  constructor () {
    super(); 
    this.state = {
      tricks:[]
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/tricks")
    .then(response => {
      return response.json()})
    .then(data => {
      this.setState(prevState => {
        return {...prevState, tricks:data }
      })
    })
  }

  render() {

    const tricks = this.state.tricks.map(trick => {
      return (
        <div className='trick-card' key={trick.id}>
          <h2>{trick.name}</h2>
          <p>Stance: {trick.stance}</p>
          <p>Obstacle: {trick.obstacle}</p>
        </div>
      )

    })
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <div className='tricks-wrapper'>
        {tricks}
        </div>
      </div>
    );
  }
}

export default App;