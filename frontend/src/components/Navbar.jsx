import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, 
  faTrophy, 
  faChartLine, 
  faSignInAlt, 
  faUserPlus,
  faBookOpen,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import "../styling/Navbar.css";

const NavBar = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand">
          <span className="brand-icon"><FontAwesomeIcon icon={faCode} /></span>
          <span className="brand-text">CodeMaster</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-nav" className="hamburger">
          <span className="animated-hamburger"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Dropdown as={Nav.Item} className="nav-dropdown">
              <Dropdown.Toggle as={Nav.Link} className="nav-link">
                <FontAwesomeIcon icon={faBookOpen} className="nav-icon" />
                Learn
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item as={Link} to="/challenges" className="dropdown-item">
                  <FontAwesomeIcon icon={faCode} /> Challenges
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/dashboard" className="dropdown-item">
                  <FontAwesomeIcon icon={faChartLine} /> Dashboard
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/leaderboard" className="dropdown-item">
                  <FontAwesomeIcon icon={faTrophy} /> Leaderboard
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Nav.Link as={Link} to="/resources" className="nav-link">
              <FontAwesomeIcon icon={faBookOpen} className="nav-icon" />
              Resources
            </Nav.Link>
          </Nav>
          
          <Nav className="ms-auto nav-auth">
            {user ? (
              <div 
                className="profile-section"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
                <span className="username">{user.username}</span>
                
                {showDropdown && (
                  <div className="profile-dropdown">
                    <div className="dropdown-item">{user.email}</div>
                    <button 
                      className="dropdown-item logout-btn" 
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="nav-auth-link">
                  <FontAwesomeIcon icon={faSignInAlt} className="nav-icon" />
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="nav-auth-link signup">
                  <FontAwesomeIcon icon={faUserPlus} className="nav-icon" />
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;