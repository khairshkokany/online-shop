import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login"
import LandingPage from "./landingPage";
import Main from './Main';
const App = () => (



      <>
        <BrowserRouter>
            <main>
            <Route path="/app" component={LandingPage} exact/>

            <Route path="/signup" component={Signup} exact/>


            <Route path="/login" component={Login} exact/>
            <Route path="/main" component={Main} exact/>
            </main>
          </BrowserRouter>
        
      </>


  
)

export default App;