import React from "react"
import { Link } from 'react-scroll'
import Button from "react-bootstrap/Button"
import AboutUs from "../AboutUs/AboutUs"
import "./styles.css"
import classes from "./homePage.module.css"



function Homepage() {


    return (
        <>
            <div id="homepage" style={{ paddingTop: "100px", background: "black" }}>
                <div >
                    <div className={`${classes.diagonalBox} jumbotron`}
                    >
                        <div className={`${classes.homepageContainer}   ${classes.content}`}>
                            <div className={`${classes.homepageInner} `}>
                                <div>
                                    <h1 className={`${classes.homepageTitle} `} >
                                        BLACK SEA CONSULTANCY
                                    </h1>
                                    <div className="text-center">
                                        Helping Clients Navigate Security <br />
                                        Challenges in the Maritime Domain
                                    </div>
                                </div>
                                {
                                    <div className={`${classes.linkContainer}`}>
                                        <Link
                                            to="About_us"
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            className="link">
                                            <Button
                                                variant="outline-secondary"
                                                className={`${classes.homeLink} text-white`}>
                                                Learn More
                                            </Button>
                                        </Link>
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