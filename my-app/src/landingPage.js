import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingStyles.css";
import React, { Component } from 'react'

export default class landingPage extends Component {
  render() {
    return (
      <div>
         <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Shoping Page</h1>
              <p className="subtitle">One Safe place for all your Items</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
      </div>
    )
  }
}

