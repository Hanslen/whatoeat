import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout'
import Choices from './Layout/Choices/Choices';
import Feedback from './Layout/Feedback/Feedback';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Random from './Layout/Random/Random';
import Guess from './Layout/Guess/Guess';
class App extends Component {
  state = {
    choices:["Staple Food", "Fruit", "Drink", "Snack"]
  };
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Route path="/" exact
              render={() => (<Choices choices={this.state.choices}/>)}/>
            <Route path="/" exact render={() => (<Feedback />)}/>
            <Route path="/random"
              component={Random}/>
            <Route path="/guess" exact
              component={Guess}/>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;

