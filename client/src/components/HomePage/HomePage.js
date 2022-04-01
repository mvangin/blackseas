import React from "react"
import { Link } from 'react-scroll'
import Button from "react-bootstrap/Button"
import AboutUs from "../AboutUs/AboutUs"
import  "./styles.css"


function Homepage() {


    return (
        <>
            <div id="homepage" style={{ paddingTop: "100px", background: "black" }}>
                <div >
                    <div fluid
                        className="diagonal-box jumbotron"
                        style={{
                            height: "80vh",
                            marginTop: "0px",
                            marginBottom: "0px",
                            paddingTop: "150px",
                            paddingBottom: "0px",
                            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/geometricImage.webp')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover"

                        }}>
                        <div className="homepageContainer content">
                            <div className="homepageInner">
                                <div>
                                    <h1 className="text-center" style={{ background: "black", padding: "20px" }}>
                                        BLACK SEA CONSULTANCY
                                    </h1>
                                    <div className="text-center">
                                        Helping Clients Navigate Security <br />
                                        Challenges in the Maritime Domain
                                    </div>
                                </div>
                                {
                                    <div className="linkContainer">
                                        <Link
                                            to="About_us"
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            className="link">
                                            <Button style={{ color: "white" }} variant="outline-secondary" className="homeLink"> Learn More </Button> </Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
        </>
    )
}

export default Homepage