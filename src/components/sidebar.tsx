import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { routes } from '../utils/constants';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useHistory, useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    sidebar:{
        display: 'flex',
        flexDirection: 'column',
        width:'100%'
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
    selectedlabel:{
        padding: '0',
        margin: '10px',
        color: '#fff',
        fontSize:12
    },
    icon:{
        color: '#B0B0B0'
    },
    selectedicon:{
        color: '#fff'
    },
    slectedItem:{
        padding: '15px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        background: '#808080'
    }
   
}));
export default function Sidebar() {
    const classes = useStyles();
    let history = useHistory();
    const location = useLocation();
    const navigate=(argItem: any)=>{
        console.log(location);
        history.push(argItem.path);
    }

    const isSelected=(item: any): boolean=>{
        item.routes.forEach((subItem: string)=>{
            if(location.pathname.includes(subItem)){
                return true
            }
        })
        return false;
    }

    return (
        <div className={classes.sidebar}>
            {routes.map(item=>(
                <div className={location.pathname.includes(item.path)? classes.slectedItem: classes.sidebarItem} key={item.name} onClick={(e)=>navigate(item)}>
                    <DashboardIcon className={isSelected(item)? classes.selectedicon: classes.icon}/>
                    <p className={location.pathname.includes(item.path)? classes.selectedlabel: classes.label}>
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    )
}
