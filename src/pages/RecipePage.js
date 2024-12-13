import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RecipeCard from './RecipeCard'; // Make sure path is correct
import axios from 'axios'; // Import axios

import styles from '../../styles/RecipePage.module.css';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch recipes from API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/recipes/');
        setRecipes(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load recipes');
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <h2 className={styles.Header}>Recipes</h2>
      <Row>
        {recipes.map((recipe) => (
          <Col xs={12} sm={6} md={3} key={recipe.id} className="mb-4">
            <RecipeCard
              title={recipe.title}
              image={recipe.image_url}
              description={recipe.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipePage;