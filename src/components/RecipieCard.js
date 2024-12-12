import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  return (
    <Card className={styles.RecipeCard}>
      <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          {recipe.description}
        </Card.Text>
        <Button variant="primary" href={`/recipes/${recipe.id}`}>View Recipe</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;