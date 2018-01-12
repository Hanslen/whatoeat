import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout'
import Choices from './Layout/Choices/Choices';
class App extends Component {
  state = {
    choices:["Staple Food", "Fruit", "Drink", "Snack"]
  };
  render() {
    return (
      <div>
        <Layout>
          <Choices choices={this.state.choices}/>
        </Layout>
      </div>
    );
  }
}

export default App;
