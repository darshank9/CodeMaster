import React from "react";
import { Container, Row, Col, Card, ProgressBar, ListGroup, Button } from "react-bootstrap"; // Added Button import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTrophy, 
  faCheckCircle, 
  faChartLine, 
  faClock,
  faFire,
  faBookOpen,
  faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
import "../../styling/Dashboard.css"; // Create this CSS file

const Dashboard = () => {
  // Mock data
  const ongoingChallenges = [
    { id: 1, title: "React State Management", progress: 65 },
    { id: 2, title: "Advanced Algorithms", progress: 30 },
    { id: 3, title: "Node.js Backend", progress: 80 }
  ];

  const recentActivity = [
    { id: 1, action: "Completed Challenge: JavaScript Basics", date: "2h ago" },
    { id: 2, action: "Earned Bronze Badge: Speed Coder", date: "1d ago" },
    { id: 3, action: "Reached Level 5", date: "3d ago" }
  ];

  const skillDistribution = [
    { skill: "JavaScript", value: 45 },
    { skill: "React", value: 30 },
    { skill: "Node.js", value: 15 },
    { skill: "Algorithms", value: 10 }
  ];

  return (
    <div className="dashboard-page">
      <Container className="py-5">
        <h1 className="display-4 mb-4">
          <FontAwesomeIcon icon={faChartLine} className="me-3" />
          My Learning Dashboard
        </h1>

        {/* Stats Cards */}
        <Row className="g-4 mb-5">
          <Col xl={3} md={6}>
            <Card className="stats-card shadow">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="text-muted">Completed</Card.Title>
                    <h2 className="mb-0">8</h2>
                  </div>
                  <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-success" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card className="stats-card shadow">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="text-muted">Ranking</Card.Title>
                    <h2 className="mb-0">#12</h2>
                  </div>
                  <FontAwesomeIcon icon={faTrophy} size="3x" className="text-warning" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card className="stats-card shadow">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="text-muted">XP Points</Card.Title>
                    <h2 className="mb-0">1250</h2>
                  </div>
                  <FontAwesomeIcon icon={faFire} size="3x" className="text-danger" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6}>
            <Card className="stats-card shadow">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="text-muted">Daily Goal</Card.Title>
                    <h2 className="mb-0">3/5</h2>
                  </div>
                  <FontAwesomeIcon icon={faCalendarCheck} size="3x" className="text-primary" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="g-4">
          {/* Ongoing Challenges */}
          <Col lg={6}>
            <Card className="shadow">
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">
                  <FontAwesomeIcon icon={faClock} className="me-2" />
                  Ongoing Challenges
                </h5>
              </Card.Header>
              <Card.Body>
                {ongoingChallenges.map((challenge) => (
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

          {/* Activity Feed */}
          <Col lg={6}>
            <Card className="shadow">
              <Card.Header className="bg-info text-white">
                <h5 className="mb-0">
                  <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                  Recent Activity
                </h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {recentActivity.map((activity) => (
                    <ListGroup.Item key={activity.id} className="d-flex justify-content-between">
                      <span>{activity.action}</span>
                      <small className="text-muted">{activity.date}</small>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Skill Distribution */}
          <Col lg={6}>
            <Card className="shadow">
              <Card.Header className="bg-success text-white">
                <h5 className="mb-0">
                  <FontAwesomeIcon icon={faChartLine} className="me-2" />
                  Skill Distribution
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="skill-chart">
                  {skillDistribution.map((skill) => (
                    <div key={skill.skill} className="skill-item mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{skill.skill}</span>
                        <span>{skill.value}%</span>
                      </div>
                      <ProgressBar 
                        now={skill.value} 
                        variant="success" 
                        className="progress-lg"
                      />
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Quick Actions */}
          <Col lg={6}>
            <Card className="shadow">
              <Card.Header className="bg-warning text-dark">
                <h5 className="mb-0">
                  <FontAwesomeIcon icon={faFire} className="me-2" />
                  Quick Actions
                </h5>
              </Card.Header>
              <Card.Body>
                <Row className="g-3">
                  <Col md={6}>
                    <Button variant="primary" className="w-100 action-btn">
                      Start New Challenge
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button variant="success" className="w-100 action-btn">
                      View Leaderboard
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button variant="info" className="w-100 action-btn">
                      Earn Achievements
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button variant="danger" className="w-100 action-btn">
                      Daily Goals
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
