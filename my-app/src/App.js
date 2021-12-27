import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login"
import LandingPage from "./LandingPage";
import Main from './Main';
import Seller from './Seller'
import Type from './Type'
const App = () => (



      <>
        <BrowserRouter>
            <main>
            <Route path="/" component={LandingPage} exact/>

            <Route path="/signup" component={Signup} exact/>
            <Route path="/seller" component={Seller} exact/>
            <Route path="/type" component={Type} exact/>


            <Route path="/login" component={Login} exact/>
            <Route path="/main" component={Main} exact/>
            </main>
          </BrowserRouter>
        
      </>


  
)

export default App;