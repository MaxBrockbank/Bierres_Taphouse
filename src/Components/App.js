import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Control from './Control';
import './../App.css';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Control />
      </Container>
    </React.Fragment>
  );
}

export default App;
