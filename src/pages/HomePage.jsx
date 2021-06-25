import React from 'react';
import logo from "../logo1.svg";
import "../App.css";
import {Container} from '@material-ui/core'

function HomePage() {
  return (
    <Container
    maxWidth="lg"
    >
    <div className="App">
      <header className="App-header">
        <img src={logo} />
        <br></br>
        <br></br>
        <Container item>
          Welcome to your 
        </Container>
        <br></br>
        <Container item>
          Product Management Career Coach!
        </Container>
      </header>
    </div>
    </Container>
  );
}

export default HomePage;
