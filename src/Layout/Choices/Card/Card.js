import React, {Component} from 'react';
import classes from './Card.css';
import foodIcon from '../../../img/food.png';
import fruitIcon from '../../../img/fruit.png';
import drinkIcon from '../../../img/drink.png';
import snackIcon from '../../../img/snack.png';
class Card extends Component {
    render(){
        let cardColor = null;
        let cardIcon = null;
        switch(this.props.type){
            case('Staple Food'):
                cardColor = {backgroundColor: '#e4c561',color:"#c98c47"};
                cardIcon = foodIcon;
                break;
            case('Fruit'):
                cardColor = {backgroundColor:'#dc7254', color: "#9b3731"};
                cardIcon = fruitIcon;
                break;
            case('Drink'):
                cardColor = {backgroundColor:'#98394f', color: "#611533"};
                cardIcon = drinkIcon;
                break;
            case('Snack'):
                cardColor = {backgroundColor:'#4f2f55', color: "#251334"};
                cardIcon = snackIcon;
                break;
            default:
                cardColor = {backgroundColor:'#000000'};
                break;
        }
        return(
            <div className={classes.ChoiceCard} style={cardColor}>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src={cardIcon} className={classes.cardIcon}/>
                        </div>
                        <div className="col-8">
                            <p className={classes.CardP}>{this.props.type}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;