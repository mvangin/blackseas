import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import classes from './navbar.module.css';

function NavbarComponent() {
	return (
		<>
			<Navbar
				className={`${classes.navBar}`}
				fixed="top"
				id="navbar"
				collapseOnSelect
				expand="sm"
				variant="dark"
			>
				<Navbar.Brand className="ms-3" href="#home">
					Black Seas Consultancy
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<div className={`${classes.navbarContainer}`}>
						<Nav.Link
							className={`${classes.navLink} ms-auto`}
							href="#homepage"
						>
							Home
						</Nav.Link>
						{/*<Nav.Link className={`${classes.navLink}`} href="#about_us">About Us</Nav.Link>*/}
						<Nav.Link
							className={`${classes.navLink}`}
							href="#press"
						>
							Press
						</Nav.Link>
						<Nav.Link href="#contact-form">
							<div className={`${classes.contactUs} `}>
								Contact Us
							</div>
						</Nav.Link>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NavbarComponent;
