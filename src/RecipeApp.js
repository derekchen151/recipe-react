import React, { Component } from 'react';
import './RecipeApp.css';
import Nav from './Navbar';
import RecipesList from './RecipesList';

class RecipeApp extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="RecipesList">
          <RecipesList />
        </div>
      </div>
    );
  }
}

export default RecipeApp;
