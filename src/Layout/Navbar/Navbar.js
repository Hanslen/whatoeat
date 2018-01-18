import React from 'react';
import classes from './Navbar.css';
const navbar = () => {
    var d = new Date();
    var h = d.getHours();
    var msg = "";
    if(h < 12){
        msg = "早上好(◍•ᴗ•`◍)❤年年";
    }
    else if(h >= 17){
        msg = "晚上好(◍•ᴗ•`◍)❤年年";
    }
    else{
        msg = "下午好(◍•ᴗ•`◍)❤年年";
    }
    return (
        <nav className={classes.NavBar}>
             <p>{msg}<br/>派派来解决吃饭问题了٩٩꒰｡•◡•｡꒱۶</p>
        </nav>
    );
}
export default navbar;