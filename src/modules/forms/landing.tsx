import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    menuContainer:{
        width: "100%",
    },
    primaryBtn:{
        margin: '20px 30px 0 0'
    }
}));

export default function landing() {
    const classes = styles();
    return (
        <div className={classes.menuContainer}>
            <Link className={classes.primaryBtn} to='/forms/template'>
                Template
            </Link>

            <Link className={classes.primaryBtn} to='/forms/reactive'>
                Reactive
            </Link>
      </div>
    )
}

