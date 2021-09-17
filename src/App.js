import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Appointment from "./Component/Appointment/Appintment/Appointment";
import Login from "./Component/Login/Login/Login"
import PrivateRoute from "./Component/Login/PrivateRoute/PrivateRoute"
import Dashboard from "./Component/Dashboard/Dashboard/Dashboard";


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState([]);
     console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
       <Router>
         <Switch>
           <Route exact path="/">
               <Home></Home>
           </Route>
           <Route path="/appointment">
               <Appointment></Appointment>
           </Route>
           <Route path="/dashboard/appointment">
               <Dashboard></Dashboard>
           </Route>
           <Route path="/login">
               <Login></Login>
           </Route>
         </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
