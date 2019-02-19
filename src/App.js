import React, { Component } from "react";
import classes from "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <Layout>
        <h2 className={classes.App}>Welcome to Burger builder app</h2>
        <BurgerBuilder className={classes.App} />
      </Layout>
    );
  }
}

export default App;
