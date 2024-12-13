import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import {Route,Routes} from 'react-router-dom';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import RecipePage from './pages/RecipePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/recipies" element={<RecipePage />} />
          <Route exact path="/signin" element={<SignInForm />} />
          <Route exact path="/signup" element={<SignUpForm />} />
          <Route element={<p>Page not Found!</p>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
