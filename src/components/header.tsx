import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PagesIcon from '@material-ui/icons/Pages';
import Logo from '../assets/images/logo.svg';

const useStyles = makeStyles((theme) => ({
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        padding:'1% 2%'
    },
    headerleft:{
        display: 'flex',
        flexBasis: '25%',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#FFFFFF',
        boxShadow: '0px 2px 4px rgb(0 0 0 / 8%), 0px 4px 24px rgb(0 0 0 / 8%)',
        borderRadius: '4px',
        padding: '10px'
    },
    headerright:{
        flexBasis: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#FFFFFF',
        boxShadow: '0px 2px 4px rgb(0 0 0 / 8%), 0px 4px 24px rgb(0 0 0 / 8%)',
        borderRadius: '4px',
        padding: '10px'
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.header}>
                <div className={classes.headerleft}>
                     <img src={Logo} alt="image" />
                     <PagesIcon/>
                     <QueryBuilderIcon/>
                     <EqualizerIcon/>
                </div>
                <div className={classes.headerright}>
                    <WbSunnyIcon/>
                    <ChatBubbleOutlineIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </React.Fragment>
    )
}

