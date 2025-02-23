import React from "react";
import { Container, Table, ProgressBar, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTrophy, 
  faCrown, 
  faMedal, 
  faSearch,
  faUser,
  faFire
} from "@fortawesome/free-solid-svg-icons";
import "../../styling/Leaderboard.css"; // Create this CSS file

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const users = [
    { 
      rank: 1, 
      name: "Alice", 
      score: 4500, 
      xp: 2500,
      progress: 85,
      badges: ["gold", "streak", "speed"],
      isCurrentUser: false
    },
    { 
      rank: 2, 
      name: "Bob", 
      score: 4200, 
      xp: 2200,
      progress: 70,
      badges: ["silver", "streak"],
      isCurrentUser: false
    },
    { 
      rank: 3, 
      name: "Charlie", 
      score: 3900, 
      xp: 1900,
      progress: 60,
      badges: ["bronze", "speed"],
      isCurrentUser: true  // Highlight current user
    },
    { 
      rank: 4, 
      name: "Diana", 
      score: 3700, 
      xp: 1700,
      progress: 45,
      badges: ["streak"],
      isCurrentUser: false
    },
  ];

  const getBadgeIcon = (badge) => {
    switch(badge) {
      case 'gold': return <FontAwesomeIcon icon={faCrown} className="text-warning" />;
      case 'silver': return <FontAwesomeIcon icon={faMedal} className="text-secondary" />;
      case 'bronze': return <FontAwesomeIcon icon={faMedal} className="text-danger" />;
      case 'streak': return <FontAwesomeIcon icon={faFire} className="text-danger" />;
      case 'speed': return <FontAwesomeIcon icon={faTrophy} className="text-success" />;
      default: return null;
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="leaderboard-page">
      <Container className="py-5">
        <div className="leaderboard-header mb-5 text-center">
          <h1 className="display-4 mb-3">
            <FontAwesomeIcon icon={faTrophy} className="me-3" />
            Global Leaderboard
          </h1>
          <div className="search-bar mx-auto mb-4">
            <Form.Control
              type="search"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-pill"
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>

        <div className="table-responsive">
          <Table hover className="leaderboard-table">
            <thead className="gradient-header">
              <tr>
                <th className="rank-col">Rank</th>
                <th className="user-col">User</th>
                <th className="progress-col">Progress</th>
                <th className="xp-col">XP</th>
                <th className="score-col">Score</th>
                <th className="badges-col">Badges</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.rank} className={`${user.isCurrentUser ? 'current-user' : ''}`}>
                  <td className="rank-cell">
                    {user.rank <= 3 ? (
                      <FontAwesomeIcon 
                        icon={faTrophy} 
                        className={`rank-icon rank-${user.rank}`}
                      />
                    ) : user.rank}
                  </td>
                  <td className="user-cell">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      {user.name}
                    </div>
                  </td>
                  <td className="progress-cell">
                    <ProgressBar 
                      now={user.progress} 
                      variant={getProgressVariant(user.progress)}
                      className="progress-lg"
                    />
                    <small className="text-muted">{user.progress}% to next rank</small>
                  </td>
                  <td className="xp-cell">
                    <FontAwesomeIcon icon={faFire} className="text-danger me-2" />
                    {user.xp}
                  </td>
                  <td className="score-cell">{user.score}</td>
                  <td className="badges-cell">
                    {user.badges.map((badge) => (
                      <span key={badge} className="badge-icon me-2">
                        {getBadgeIcon(badge)}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="text-center mt-4">
          <Button variant="outline-primary" className="load-more">
            View More Rankings
          </Button>
        </div>
      </Container>
    </div>
  );
};

const getProgressVariant = (progress) => {
  if (progress > 75) return "success";
  if (progress > 50) return "warning";
  return "danger";
};

export default Leaderboard;