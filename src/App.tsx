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
import { useLocalStorage } from './hooks/useLocalStorage';
import { fetchToken } from './auth/auth';
import { Provider } from 'use-http';


function App() {
  let [token, setToken] = useLocalStorage<string>("token","");

  const options = {
    interceptors:{
      request: async ({ options, url, path, route }) => {
          token = await fetchToken(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET, "https://eu.battle.net/oauth/token");
          setToken(token)
        
        options.headers.Authorization = `Bearer ${token}`
        return options
      },
      // every time we make an http request, before getting the response back, this will run
      response: async ({ response }) => {
        const res = response
        return res
      }
    }
    }

  return (
  <Provider url="https://eu.api.blizzard.com" options={options}>
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
  </Provider>
  );
}


export default App;
