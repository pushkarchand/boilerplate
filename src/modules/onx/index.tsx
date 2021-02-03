import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Heading from "../../components/header";
import Sidebar from "../../components/sidebar";

import Fallback from "../root/fallback";
const Forms = lazy(() => import("../forms/index"));
const Companies = lazy(() => import("../companies/index"));
const Projects = lazy(() => import("../projects/index"));
const Roles = lazy(() => import("../roles/index"));
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
                            <Route path="/teammates" component={Teammates} />
                            <Route path="/companies" component={Companies} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/roles" component={Roles} />
                            <Route path="/forms" component={Forms} />
                            <Route path="/" component={Teammates} />
                        </Switch>
                    </Suspense>
                </div>
             </div>
        </div>
    )
}
