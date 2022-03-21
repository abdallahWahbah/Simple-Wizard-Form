import React from 'react';
import { useStyles } from './HeaderStyle';
import { Link } from 'react-router-dom';

const Header = () => 
{
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Link to="/" className={classes.link}>All Data</Link>
            <Link to="/new" className={classes.link}>New Person</Link>
        </div>
    )
}

export default Header