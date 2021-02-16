import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy, useReducer, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Fallback from "./modules/root/fallback";
import Notify from './services/notify';
import {  ThemeProvider } from '@material-ui/core/styles';
import {theme} from './utils/theme';
import Login from './modules/root/login';
import signup from './modules/root/register';
import { stateContext } from './context/authentication/authContext';
import { initialState, stateReducer } from './context/authentication/reducer';
import { CircularProgress } from "@material-ui/core";
import Onx from "./modules/root/index";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  
  useEffect(() => {
    Notify.notifications.subscribe((alert: any) => alert instanceof Function && alert());
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <stateContext.Provider value={{state:state,dispatch:dispatch}}>
      <Router>
      {state.isAuthenticated?(
        <div className="container">
           <div className="container">
              <Onx/>
           </div>
        </div>
        ):(
          <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={signup} />
              <Route path="*" component={Login} />
          </Switch>
        )}
      </Router>
      <ToastContainer autoClose={5000} />
      {state.isLoading?(
         <div className="backdrop">
            <CircularProgress color="inherit" />
        </div>
      ):("")}
      </stateContext.Provider>
    </ThemeProvider>
  );
}

export default App;