import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

export default class Recipe extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
        img: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    render() {
        const { title, img } = this.props;
        const ingredients = this.props.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
        });
        const instructions = this.props.instructions.map((instruction, index) => {
            return <li key={index}>{instruction}</li>
        })
        return (
            <div className="recipe-card">
                <div className="recipe-card-image"><img src={img} alt={title}></img></div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title} </h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <label>Instructions:</label>
                    <ul>
                        {instructions}
                    </ul>
                </div>
            </div>
        );
    }
}