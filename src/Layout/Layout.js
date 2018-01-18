import React from 'react';
import classes from './Layout.css';
import Navbar from './Navbar/Navbar';

const layout = (props) => {
    return(
        <div className={classes.parentCla}>
            <Navbar/>
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default layout;
