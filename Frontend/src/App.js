import React from "react";


import LoginRegister from "./pages/Login/LoginRegister";
import Course from "./components/Courses/courses";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Forms/Contact";
import { AuthProvider } from "./firebase/AuthContext";
import PrivateRoute from "./firebase/PrivateRoute";
import DashboardNew from "./pages/DashboardNew/Dashboardnew";
import Allcard from "./pages/DashboardNew/Allcard";
import Discussion from "./components/discussion/Discussion";
import FooterNew from "./components/Footer/Footer";
import CoursesNew from "./components/Courses/courses";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <LoginRegister />
            </Route>

            <Route exact path = "/playground">
              <CoursesNew/>
            </Route>  

            <Route path="/courses">
            <Course/>
            </Route>

            <PrivateRoute path="/dashboard">
              <DashboardNew />
              <Allcard />
              <FooterNew/>
            </PrivateRoute>

            <PrivateRoute path="/chat">
              <DashboardNew />
              <Discussion />
            </PrivateRoute>

            <PrivateRoute path="/add">
              <DashboardNew />
              <Contact />
              <FooterNew/>
            </PrivateRoute>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
