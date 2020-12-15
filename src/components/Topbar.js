import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Topbar = props => <>
        <Navbar bg="white" variant="light" className="py-2">
          <Navbar.Brand href="#home">
            <img
              alt="Book logo"
              src="/img/logo.jpg"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
            The Librarian
          </Navbar.Brand>
        </Navbar>
      </>


			export default Topbar