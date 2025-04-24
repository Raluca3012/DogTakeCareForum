import './App.css';
import Home from "./home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './navBar/NavBar';
import { React } from "react";
import InsertDog from './Dog/insertDog';
import Login from './sign_in-up/LogIn';
import SignUp from './sign_in-up/Register';
import { Logout } from './sign_in-up/LogOut';
import DogDetails from './Dog/DogDetails';




function App() {
  return (
    <Router>
      <div className="App-header">
      
      </div>
      <NavBar />

      
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>



          <Route exact path="/insertDog">
            <InsertDog />
          </Route>
          <Route exact path="/viewDetails">
            <DogDetails />
          </Route>
          <Route exact path="/logOut">
            <Logout />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;





