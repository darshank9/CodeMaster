import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col, ProgressBar, Spinner } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faStar, faClock, faTrophy } from "@fortawesome/free-solid-svg-icons";

const Challenge = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/challenges/");
        setChallenges(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        Error loading challenges: {error}
      </div>
    );
  }

  return (
    <div className="challenges-page">
      <Container className="py-5">
        <header className="text-center mb-5">
          <h1 className="display-4 mb-3 gradient-text">
            <FontAwesomeIcon icon={faCode} className="me-3" />
            Coding Challenges
          </h1>
          <p className="lead text-muted">Test your skills and climb the leaderboard</p>
          
          <div className="stats-bar d-flex justify-content-center gap-4 mb-4">
            <div className="stat-item">
              <FontAwesomeIcon icon={faTrophy} className="me-2" />
              <span className="fw-bold">{challenges.length}</span> Challenges
            </div>
            <div className="stat-item">
              <FontAwesomeIcon icon={faStar} className="me-2" />
              <span className="fw-bold">
                {challenges.reduce((sum, challenge) => sum + challenge.points, 0)}
              </span> Points Available
            </div>
          </div>
        </header>

        <Row className="g-4">
          {challenges.map((challenge) => (
            <Col lg={4} md={6} key={challenge.id}>
              <Card className="h-100 challenge-card shadow-lg">
                <Card.Header className={`difficulty-${challenge.difficulty.toLowerCase()}`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-dark">{challenge.difficulty}</span>
                    <div className="points">
                      <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                      {challenge.points}
                    </div>
                  </div>
                </Card.Header>
                
                <Card.Body>
                  <Card.Title className="mb-3">{challenge.title}</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    {challenge.description}
                  </Card.Text>
                  
                  <div className="tags mb-3">
                    {challenge.tags.map((tag) => (
                      <span key={tag.name} className="badge bg-secondary me-2">
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  {challenge.status === "started" && (
                    <div className="progress-container">
                      <small className="text-muted d-block mb-2">
                        Progress: {challenge.completed}%
                      </small>
                      <ProgressBar now={challenge.completed} className="mb-3" />
                    </div>
                  )}
                </Card.Body>

                <Card.Footer className="bg-transparent border-0">
                  <Button 
                    variant="primary" 
                    className="w-100 challenge-btn"
                    href={`/challenges/${challenge.id}`}
                  >
                    {challenge.status === "started" ? "Continue Challenge" : "Start Challenge"}
                    <FontAwesomeIcon icon={faClock} className="ms-2" />
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Challenge;