import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
const Topbar = props =>
  <>
    <Navbar bg="light" expand="lg" className="py-2 mb-4 " >
      <Navbar.Brand href="#home" className="justify-content-start"> <img alt="Book logo" src="/img/logo.jpg" width="45" height="45" />  The Librarian </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to='/search'><Icon.PlusCircleFill color='#26f234' className="mr-2" size={25} /></Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </>


export default Topbar