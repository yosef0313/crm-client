
import React ,{useState,useCallback, useEffect}from "react";
import { BrowserRouter as Router,  Route ,Switch  } from 'react-router-dom';

import Login from "./users/LogIn";
import {AuthContext} from './share/context/Context';
import CreatCustomer from "./compo/customer/CreatCustomer";
import CustomerFlow from "./compo/customer/page/CustomerFlow";
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [level, setlevel] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
    setlevel(0);
    localStorage.setItem("login",true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  useEffect(()=>{
    if(localStorage.getItem('login')){
      setIsLoggedIn(true)
    }
  },[])
 


  return (
    <AuthContext.Provider   value={{ isLoggedIn: isLoggedIn,level:level, login: login, logout: logout }}
    >
    <Router>
    <div className="App">

      <Switch>    
       
        {!isLoggedIn&&<Route  path="/login"  ><Login login={login}/></Route>}
        {isLoggedIn&&<Route path="/customer/:phone" ><CustomerFlow /></Route>}
        {isLoggedIn&&<Route path="/customer" ><CustomerFlow /></Route>}
        {isLoggedIn&&<Route path="/newCustomer" ><CreatCustomer/></Route>}
        
      </Switch>
    </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
