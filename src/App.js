import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout'
import Choices from './Layout/Choices/Choices';
import Feedback from './Layout/Feedback/Feedback';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  state = {
    choices:["Staple Food", "Fruit", "Drink", "Snack"]
  };
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Choices choices={this.state.choices}/>
            <Feedback />
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
