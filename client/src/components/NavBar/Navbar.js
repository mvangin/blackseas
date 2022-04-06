import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll'
import { useState } from "react"
import ContactForm from "../ContactForm/ContactForm"
import classes from "./navbar.module.css"
import Container from "react-bootstrap/Container"

function NavbarComponent() {


    const [contactModalShow, setContactModalShow] = useState(false);

    return (
        <>
            <Navbar
                className={`${classes.navBar}`}
                fixed="top"
                id="navbar"
                collapseOnSelect
                expand="lg"
                variant="dark" >
                    <Navbar.Brand className="ms-3" href="#home">Black Seas Consultancy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className={`${classes.navbarContainer}`} >
                            <Nav.Link className={`${classes.navLink} ms-auto`} href="#homepage">Home</Nav.Link>
                            <Nav.Link className={`${classes.navLink}`} href="#about_us">About Us</Nav.Link>
                            <Nav.Link className={`${classes.navLink}`} href="#press"> Press </Nav.Link>
                            <Nav.Link>
                                <div
                                    className={`${classes.contactUs} `}
                                    onClick={() => setContactModalShow(true)}>
                                    Contact Us
                                </div>
                            </Nav.Link>
                        </div>
                    </Navbar.Collapse>
            </Navbar>
            <ContactForm
                show={contactModalShow}
                onHide={() => setContactModalShow(false)}
            />
        </>
    )
}

export default NavbarComponent