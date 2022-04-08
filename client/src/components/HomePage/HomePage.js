import React from "react"
import Button from "react-bootstrap/Button"
import AboutUs from "../AboutUs/AboutUs"
import classes from "./homePage.module.css"
import Press from "../Press/Press"


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
                                        <a href="#About_us">
                                            <Button
                                                variant="outline-secondary"
                                                className={`${classes.homeLink} text-white`}>
                                                Learn More
                                            </Button>
                                        </a>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
            <Press/>
        </>
    )
}

export default Homepage