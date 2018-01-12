import React, {Component} from 'react';
import classes from './Card.css';
class Card extends Component {
    render(){
        let card = null;
        switch(this.props.type){
            case('Staple Food'):
            card = <div className>
        }
        return(
            <div className={classes.ChoiceCard}>
                {this.props.children}
            </div>
        );
    }
};

export default Card;