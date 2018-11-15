import React from 'react';
import classes from './PizzaImage.css';
import img from '../../assets/pizza.jpg';

const pizzaImage = (props)=>(
    <div className={classes.PizzaImage}>
        <img src={img} className={classes.Img}/>
    </div>
);

export default pizzaImage;