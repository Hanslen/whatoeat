import React from 'react';
import classes from './Layout.css';

const layout = (props) => {
    let msg = ["Good Morning", "Good Afternoon", "Good Evening"];
    return(
        <div className="parentCla">
            <nav className="NavBar">
                <p>{msg[0]}</p>
            </nav>
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default layout;
