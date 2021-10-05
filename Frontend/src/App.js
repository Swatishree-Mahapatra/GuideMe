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
            <Route exact path="/" component={LoginRegister} />

            <Route path="/courses" component={Course} />

            <PrivateRoute
              path="/dashboard"
              component={(DashboardNew, Allcard, FooterNew)}
            />

            <PrivateRoute path="/chat" component={(DashboardNew, Discussion)} />

            <PrivateRoute
              path="/add"
              component={(DashboardNew, Contact, FooterNew)}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
