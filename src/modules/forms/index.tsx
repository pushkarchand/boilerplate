// import {Route} from "react-router-dom";
import Landing from './landing';
// import Tempate from './template'
// import Reactive from "./reactive";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    mainContainer:{
        padding:"25px"
    }
}));

export default function FormsLanding() {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
        <h3>RFI</h3>
        <Landing/>
        {/* <Route  path={'/forms/template'} component={Tempate} />
        <Route  path={'/forms/reactive'} component={Reactive} /> */}
    </div>
    )
}
