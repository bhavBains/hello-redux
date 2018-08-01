import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore (reducer, initialState);
const initialState = { tech: "React"};

class App extends Component {
  
  render() {
    return <HelloWorld tech={ store.getState().tech} />;
  }
}

export default App;
