import React, { Component } from 'react'
import Recipe from './Recipe'
import PropTypes from 'prop-types';
import './RecipesList.css';

export default class RecipesList extends Component{
    static defaultProps = {
        recipes: [
            {title: "Rigatoni alla Genovese",
             ingredients: ["1 tablespoon olive oil", 
                "6 ounces pancetta or salt pork, diced", "2 1/2 pounds beef chuck"],
             img: "https://images.media-allrecipes.com/userphotos/720x405/3489951.jpg",
             instructions: ["Heat oil in a large pot over medium heat. Cook pancetta until most of fat is rendered out, about 6 minutes. Remove cooked pancetta with a slotted spoon and save.", 
                "Raise heat to high and transfer meat to the pot. Season with salt. Cook and stir until liquid releases from beef and begins to evaporate, and meat browns, 10 to 15 minutes."]
            },
            {title: "Chicken Marsala Over White Rice",
             ingredients: ["1 cup uncooked white rice", 
                "2 cups water"],
             img: "https://images.media-allrecipes.com/userphotos/720x405/5406361.jpg",
             instructions: ["Bring the rice and water to a boil in a saucepan over high heat. Reduce heat to medium-low, cover, and simmer until the rice is tender, and the liquid has been absorbed, 20 to 25 minutes. Set rice aside.",
                "In a large bowl, whisk the flour with salt, black pepper, and oregano. Gently press the chicken breasts into the flour mixture to coat, and shake off the excess flour."]
            },
            {title: "Baked Pork Chops I",
             ingredients: ["6 pork chops", 
                "1 teaspoon garlic powder"],
             img: "https://images.media-allrecipes.com/userphotos/720x405/642155.jpg",
             instructions: ["Preheat oven to 350 degrees F (175 degrees C).",
                "Rinse pork chops, pat dry, and season with garlic powder and seasoning salt to taste. Place the beaten eggs in a small bowl. Dredge the pork chops lightly in flour, dip in the egg, and coat liberally with bread crumbs."]
            }
        ]
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
        
    render() {
        const recipes = this.props.recipes.map((recipe, index) => {
            return <Recipe key={index} {...recipe} />
        })
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}