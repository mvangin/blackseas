import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-scroll'
import { useState } from "react"
import ContactForm from "../ContactForm/ContactForm"
import classes from "./navbar.module.css"


function NavbarComponent() {


    const [contactModalShow, setContactModalShow] = useState(false);

    return (
        <Navbar fixed="top"
            style={{ background: "black", paddingTop: "0px", paddingBottom: "0px" }}
            className="navbarChange w-100"
            collapseOnSelect
            expand="lg"
            variant="dark" >

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className=" p-2" id="responsive-navbar-nav" >
                <Navbar.Brand>
                    <Link to="/"
                        className="nav-link text-light"
                        style={{ borderBottom: "1px solid grey" }}>
                        <h1 style={{ fontSize: "25px" }}>
                            Black Sea Consultancy
                        </h1>
                    </Link>
                </Navbar.Brand >
                <Nav className="">
                    <Link
                        to="homepage"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        className="nav-link "
                        style={{ cursor: "pointer" }}
                    >
                        Home
                    </Link>
                </Nav>
                <Nav>
                    <Link
                        to="About_us"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        className="nav-link "
                        style={{ cursor: "pointer" }}
                    >
                        About Us
                    </Link>
                </Nav>

                <Nav>
                    <Link
                        style={{ cursor: "pointer" }}
                        onClick={() => setContactModalShow(true)}
                        className={`${classes.contactUs} nav-link text-light`}> Contact Us </Link>
                </Nav>
            </Navbar.Collapse >

            <ContactForm
                show={contactModalShow}
                onHide={() => setContactModalShow(false)}
            />
        </Navbar >
    )
}

export default NavbarComponent