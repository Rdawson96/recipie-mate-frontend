import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/HomePage.module.css"; 

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <section className={styles.HeroSection}>
        <Container>
          <Row className="align-items-center text-center text-md-left">
            <Col md={6}>
              <h1 className={styles.HeroTitle}>Welcome to Recipe Mate</h1>
              <p className={styles.HeroDescription}>
                Discover new recipes and share your culinary creations with the world!
              </p>
              <Button href="/recipepage" variant="primary" size="lg" className={styles.HeroButton}>
                Explore Recipes
              </Button>
            </Col>
            <Col md={6}>
              <img 
                src="" 
                alt="Delicious Recipe" 
                className={styles.HeroImage} 
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.CallToAction}>
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className={styles.CallToActionTitle}>Create Your Own Recipe</h2>
              <p className={styles.CallToActionDescription}>
                Have a recipe you want to share with the world? Submit your creation to Recipe Mate today!
              </p>
              <Button href="/recipepage" variant="success" size="lg" className={styles.CallToActionButton}>
                Submit Recipe
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
