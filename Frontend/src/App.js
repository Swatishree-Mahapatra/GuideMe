import React from "react";

import MiniDrawer from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer"
import LoginRegister from "./components/Login/LoginRegister";
import Course from "./components/Courses/courses";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contact from "./components/Forms/Contact";


function App() {
  return  (<>
    <Router>
    <Switch>
      <Route exact path="/">
      <LoginRegister />
      </Route>
      <Route path="/courses">
      <Course />
      </Route>
      <Route path="/contact">
      <Contact />
      </Route>
      <Route path="/dashboard">
      <MiniDrawer />
      </Route>

    </Switch>
  </Router>
  
</>
  );
}

export default App;
