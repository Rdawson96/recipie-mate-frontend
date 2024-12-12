import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="/signin" element={<h1>Sign In</h1>} />
          <Route exact path="/signup" element={<h1>Sign Up</h1>} />
          <Route element={<p>Page not Found!</p>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
