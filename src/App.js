import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, Link } from "react-router-dom";
import CreateStudent from "./Components/CreateStudent";
import StudentList from "./Components/StudentList";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="navbar-brand">
              <Link to={"/create-student"} className="nav-link">
                React MERN App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>

              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Routes>
        <Route path="/" element={<CreateStudent />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/student-list" element={<StudentList />} />
      </Routes>
    </div>
  );
}

export default App;
