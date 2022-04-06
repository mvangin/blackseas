import React from "react"
import { Link } from 'react-scroll'
import Button from "react-bootstrap/Button"
import AboutUs from "../AboutUs/AboutUs"
import classes from "./press.module.css"



function Press() {


    return (
        <div id="press" className={`${classes.pressSection}`}>
            <h1 className="text-center" > Press </h1>
        </div>
    )
}

export default Press