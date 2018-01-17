import React, {Component} from 'react';
import classes from './Card.css';
import foodIcon from '../../../img/food.png';
import fruitIcon from '../../../img/fruit.png';
import drinkIcon from '../../../img/drink.png';
import snackIcon from '../../../img/snack.png';
import {Link} from 'react-router-dom';
class Card extends Component {
    guessHandler = () => {
        console.log("I am guessing");
    }
    randomHandler = () => {
        console.log("I am randoming");
    }
    render(){
        const detailedBox = {display:'none', height:'60px'};
        let cardColor = null;
        let cardIcon = null;
        let cardButton = {position: 'fixed', right:'20'};
        let cardTitle = null;
        switch(this.props.type){
            case('Staple Food'):
                cardColor = {backgroundColor: '#e4c561',color:"#c98c47"};
                cardIcon = foodIcon;
                cardTitle = '主食';
                break;
            case('Fruit'):
                cardColor = {backgroundColor:'#dc7254', color: "#9b3731"};
                cardIcon = fruitIcon;
                cardTitle = '水果';
                break;
            case('Drink'):
                cardColor = {backgroundColor:'#98394f', color: "#611533"};
                cardIcon = drinkIcon;
                cardTitle = '饮料';
                break;
            case('Snack'):
                cardColor = {backgroundColor:'#4f2f55', color: "#251334"};
                cardIcon = snackIcon;
                cardTitle = '零食';
                break;
            default:
                cardColor = {backgroundColor:'#000000'};
                break;
        }
        let clickCard = () => {
            if(document.getElementById(this.props.type).style.display === "none"){
                document.getElementById('Staple Food').style.display = "none";
                document.getElementById('Fruit').style.display = "none";
                document.getElementById('Drink').style.display = "none";
                document.getElementById('Snack').style.display = "none";
                document.getElementById(this.props.type).style.display = "block";
                
            }
            else{
                document.getElementById(this.props.type).style.display = "none";
            }
        };
        return(
            <div className={classes.ChoiceCard} style={cardColor} onClick={clickCard}>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={cardIcon} className={classes.cardIcon}/>
                        </div>
                        <div className="col-8">
                            <p className={classes.CardP}>{cardTitle}</p>
                        </div>
                    </div>
                    <div id={this.props.type} style={detailedBox}>
                        <button 
                            type="button" 
                            className="btn btn-outline-light">
                            <Link to="/guess">让派派猜猜:D</Link>
                        </button> 
                        <button 
                            type="button" 
                            className="btn btn-outline-light"
                            style={cardButton} 
                            style={{position:'absolute', right:10}}>
                            <Link to="/random">让派派随机:D</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;