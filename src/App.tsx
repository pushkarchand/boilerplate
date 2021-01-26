import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy, useReducer, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Header from './modules/root/header';
import Fallback from "./modules/root/fallback";
import Notify,{AlertTypes} from './services/notify';
import {  ThemeProvider } from '@material-ui/core/styles';
import {theme} from './utils/theme';
import Login from './modules/root/login';
import signup from './modules/root/register';
import { stateContext } from './context/authentication/authContext';
import { initialState, stateReducer } from './context/authentication/reducer';
import { CircularProgress } from "@material-ui/core";

const Forms = lazy(() => import("./modules/forms/inxdex"));
const Document = lazy(() => import("./modules/document/index"));

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  
  useEffect(() => {
    Notify.notifications.subscribe((alert: any) => alert instanceof Function && alert());
    Notify.sendNotification("Hello, Everyone",AlertTypes.success)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <stateContext.Provider value={{state:state,dispatch:dispatch}}>
      <Router>
      {/* {state.isAuthenticated?(
        <div className="container">
          <Header/>
          <Suspense fallback={<Fallback />}>
            <Switch>
                  <Route exact path="/" component={Forms} />
                  <Route path="/document" component={Document} />
            </Switch>
          </Suspense>
        </div>
        ):(
          <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={signup} />
              <Route path="*" component={Login} />
          </Switch>
        )} */}
         <div className="container">
          <Header/>
          <Suspense fallback={<Fallback />}>
            <Switch>
                  <Route exact path="/" component={Document} />
                  <Route path="/forms" component={Forms} />
            </Switch>
          </Suspense>
        </div>
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