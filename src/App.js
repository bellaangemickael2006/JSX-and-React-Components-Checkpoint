import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import './App.css';

// Mettez votre prénom ici. Laissez la chaîne vide pour afficher Hello, there !
const firstName = 'Bella';

function App() {
  return (
    <div className="App">
      <Container className="d-flex flex-column align-items-center py-5">
        <Card className="product-card shadow-lg">
          <Image />
          <Card.Body className="text-center">
            <Card.Title>
              <Name />
            </Card.Title>
            <Price />
            <Description />
          </Card.Body>
        </Card>

        <div className="greeting mt-4 text-center">
          <h3>{firstName ? `Hello ${firstName}` : 'Hello, there !'}</h3>
          {firstName && (
            <img
              className="avatar"
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}`}
              alt={`Avatar de ${firstName}`}
            />
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
