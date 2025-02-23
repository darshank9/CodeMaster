import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Home.css"; // Create this CSS file for custom styles

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-white py-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={8} className="py-5">
              <h1 className="display-4 mb-4 animate__animated animate__fadeInDown">
                Welcome to CodeMaster
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Transform your coding skills through interactive challenges,
                real-world projects, and community collaboration.
              </p>
              <div className="d-flex gap-3 justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
                <Button variant="primary" size="lg" href="/signup">
                  Start Learning
                </Button>
                <Button variant="outline-light" size="lg" href="/tour">
                  Take a Tour
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose CodeMaster?</h2>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 feature-card shadow">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="fas fa-laptop-code fa-3x text-primary"></i>
                  </div>
                  <Card.Title>Interactive Coding</Card.Title>
                  <Card.Text>
                    Learn by doing with our browser-based coding environment.
                    Instant feedback and hints help you improve faster.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 feature-card shadow">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="fas fa-trophy fa-3x text-danger"></i>
                  </div>
                  <Card.Title>Daily Challenges</Card.Title>
                  <Card.Text>
                    Test your skills with daily coding challenges and climb the
                    leaderboard.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 feature-card shadow">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="fas fa-users fa-3x text-success"></i>
                  </div>
                  <Card.Title>Community Support</Card.Title>
                  <Card.Text>
                    Join our active community forum to ask questions and share
                    knowledge.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-primary text-white py-5">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Start Coding?</h2>
          <p className="mb-4">Join thousands of developers improving their skills daily</p>
          <Button variant="light" size="lg" href="/signup">
            Get Started for Free
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;