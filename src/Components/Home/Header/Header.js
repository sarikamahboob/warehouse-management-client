import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <span>E</span>-WAREHOUSE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  as={NavLink}
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  Blogs
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/inventory"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  Inventory
                </Nav.Link>

                {user && (
                  <>
                    <Nav.Link
                      as={NavLink}
                      to="/addProduct"
                      className={({ isActive }) =>
                        isActive ? "active" : "nav-link"
                      }
                    >
                      Add Product
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to="/userproducts"
                      className={({ isActive }) =>
                        isActive ? "active" : "nav-link"
                      }
                    >
                      My Products
                    </Nav.Link>
                  </>
                )}
                {user ? (
                  <Nav.Link onClick={handleSignOut}>Sing Out</Nav.Link>
                ) : (
                  <div className="d-flex">
                    <Nav.Link as={NavLink} to="/signin">
                      Sing In
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/signup">
                      Sign Up
                    </Nav.Link>
                  </div>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
