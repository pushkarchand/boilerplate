import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy, useReducer, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Heading from "../../components/header";
import Sidebar from "../../components/sidebar";

import Fallback from "../root/fallback";
const Forms = lazy(() => import("../forms/inxdex"));
const Teammates =  lazy(() => import("../teammates/index"));
const useStyles = makeStyles((theme) => ({
    landing:{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    header:{
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    body:{
        display: 'flex',
        flex: '1',
        margin: '0 2% 2% 2%',
        background: '#FFFFFF',
        boxShadow: '0px 12px 16px rgba(0, 0, 0, 0.04), 0px 4px 56px rgba(0, 0, 0, 0.04)',
        borderRadius: '4px',
    },
    sidebar:{
        flexBasis: '10%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    main:{
        flexBasis: '90%',
        display: 'flex',
        justifyContent: 'space-around',
    }
}))


export default function FormsLanding() {
    const classes= useStyles();
    return (
        <div className={classes.landing}>
             <div className={classes.header}>
                <Heading/>
             </div>
             <div className={classes.body}>
                <div className={classes.sidebar}>
                    <Sidebar/>
                </div>
                <div className={classes.main}>
                    <Suspense fallback={<Fallback />}>
                        <Switch>
                            <Route exact path="/teammates" component={Teammates} />
                            <Route exact path="/forms" component={Forms} />
                            <Route exact path="/" component={Teammates} />
                        </Switch>
                    </Suspense>
                </div>
             </div>
        </div>
    )
}
