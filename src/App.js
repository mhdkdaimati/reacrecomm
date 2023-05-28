import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import axios from 'axios';
import AdminPrivateRoute from './AdminPrivateRoute';

import PublicRoute from "./PublicRoute";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}`: '';
  return config;
})
axios.defaults.withCredentials = true;


function App() {

  return (

<div className="App"> 
  <Router>
    <Switch>
      <AdminPrivateRoute path="/admin" name="Admin"/>
      <PublicRoute path="/" name="Home"/>
      <Route path="/login">
        {localStorage.getItem('auth_token')? <Redirect to="/"/> : <Login/>}
      </Route>
      <Route path="/register">
        {localStorage.getItem('auth_token')? <Redirect to="/"/> : <Register/>}
      </Route>
      {/* <Route path="/cart">
        {localStorage.getItem('auth_token')? <Redirect to="/"/> : <Register/>}
      </Route> */}

    </Switch>
  </Router>
</div>

    );
}

export default App;
