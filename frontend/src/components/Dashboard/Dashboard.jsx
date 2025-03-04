// components/Dashboard.jsx
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/UserContext";
import "../../styling/Dashboard.css";

const Dashboard = () => {
  const { user, loading, error } = useContext(UserContext);

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div className="dashboard-page">
      <Container className="py-5">
        <h1 className="display-4 mb-4">
          <FontAwesomeIcon icon={faChartLine} className="me-3" />
          Welcome back, {user.name}!
        </h1>

        {/* Ongoing Challenges */}
        <Row className="g-4 mb-5">
          <Col lg={6}>
            <Card className="shadow">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  Ongoing Challenges
                </h5>
              </Card.Header>
              <Card.Body>
                {user.ongoingChallenges.map((challenge) => (
                  <div key={challenge.id} className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span>{challenge.title}</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <ProgressBar
                      now={challenge.progress}
                      variant={challenge.progress > 70 ? "success" : "primary"}
                      className="progress-lg"
                    />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;