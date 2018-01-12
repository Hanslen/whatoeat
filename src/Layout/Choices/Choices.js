import React from 'react';
import Card from './Card/Card';
const Choices = (props) =>{
    let transformedCard = Object.keys(props.choices).map(ch=>{
        return [...Array(ch)];
    });
    console.log(transformedCard);
    return(
        <div>
            <Card/>
        </div>
    );
};

export default Choices;