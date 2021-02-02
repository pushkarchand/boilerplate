import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { routes } from '../utils/constants';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useHistory, useRouteMatch } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    sidebar:{
        display: 'flex',
        flexDirection: 'column'
    },
    sidebarItem:{
        padding: '15px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    label:{
        padding: '0',
        margin: '10px',
        color: '#B0B0B0',
        fontSize:12
    },
    icon:{
        color: '#B0B0B0'
    }
   
}));
export default function Sidebar() {
    const classes = useStyles();
    let history = useHistory();
    const {path}= useRouteMatch();
    const navigate=(argItem: any)=>{
        console.log(path);
        history.push(argItem.path);
    }


    return (
        <div className={classes.sidebar}>
            {routes.map(item=>(
                <div className={classes.sidebarItem} key={item.name} onClick={(e)=>navigate(item)}>
                    <DashboardIcon className={classes.icon}/>
                    <p className={classes.label}>
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    )
}
