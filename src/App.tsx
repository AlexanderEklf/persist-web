import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/Home';
import { NavBar } from './components/NavBar';
import { Layout } from './Layout';
import {Apply} from "./screens/Apply";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Layout title="asd">
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/apply">
            <Apply></Apply>
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}


export default App;
