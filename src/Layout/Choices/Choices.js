import React from 'react';
import Card from './Card/Card';
const Choices = (props) =>{
    let transformedCard = Object.keys(props.choices).map(ch=>{
        return [...Array(props.choices[ch])].map((choice,i)=>{
            return <Card key={choice} type={choice}>choice</Card>
        });
    });
    return(
        <div>
            {transformedCard}
        </div>
    );
};

export default Choices;