import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ title, image, description }) => {
  return (
    <Card className={styles.Card}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">View Recipe</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;