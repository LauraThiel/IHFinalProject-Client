import React, { useEffect, useState } from "react";
import { Switch} from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import GeneralQuestionnaire from "./pages/GeneralQuestionnaire.jsx";
import StartQuestionnaire from "./pages/StartQuestionnaire.jsx";
import Interviewlist from "./pages/Interviewlist";
import SingleInterview from "./pages/SingleInterview";
import AddInterview from "./components/Interviews/AddInterview";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import NormalRoute from "./routing-components/NormalRoute";
import ProtectedRoute from "./routing-components/ProtectedRoute";
import { getLoggedIn, logout } from "./services/auth";
import '@fontsource/roboto';
import * as PATHS from "./utils/paths";
import * as CONSTS from "./utils/consts";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      localStorage.removeItem(CONSTS.ACCESS_TOKEN);
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      <Switch>
        <NormalRoute exact path={PATHS.HOMEPAGE} component={HomePage} />
        <NormalRoute
          exact
          path={PATHS.SIGNUPPAGE}
          authenticate={authenticate}
          component={Signup}
        />
        <NormalRoute
          exact
          path={PATHS.LOGINPAGE}
          authenticate={authenticate}
          component={LogIn}
        />

        <ProtectedRoute 
        exact 
        path={PATHS.PROFILEPAGE} 
        component={ProfilePage}
        user={user} 
        authenticate={authenticate}
        />

        <ProtectedRoute  
        exact 
        path={PATHS.GENQUEST} 
        component={GeneralQuestionnaire} 
        user={user} 
        authenticate={authenticate}
        />

        <ProtectedRoute  
        exact 
        path={PATHS.STARTQUEST} 
        component={StartQuestionnaire} 
        user={user} 
        authenticate={authenticate}
        />

        <ProtectedRoute  
        exact 
        path={PATHS.INTERVIEWLIST} 
        component={Interviewlist} 
        user={user} 
        authenticate={authenticate}
        />

        <ProtectedRoute 
        exact 
        path={PATHS.ADD_INTERVIEW} 
        component={AddInterview}
        user={user} 
        authenticate={authenticate}
        />

      <ProtectedRoute  
        exact 
        path={PATHS.SINGLEINTERVIEW} 
        component={SingleInterview}
        user={user} 
        authenticate={authenticate} />

      </Switch>
    </div>
  );
}
