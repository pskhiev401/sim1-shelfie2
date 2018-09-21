import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: ['bananas', 4, 'url txt']
    }
  }

  componentDidMount(){
    axios.get('/api/products').then(response => {
        // console.log(response.data)
        this.setState({inventory:response.data})
    })
} 

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory && this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
