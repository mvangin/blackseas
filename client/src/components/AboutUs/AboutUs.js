import React from 'react';
import classes from './aboutUs.module.css';

function AboutUs() {
	return (
		<div id="about_us" className={`${classes.diagonal}`}>
			<div className={`${classes.content} pt-1`}>
				<div  className={`${classes.aboutUs} pt-1 d-flex flex-wrap`}>
					<div className={`${classes.aboutUsHeader}`}>
						<img
							className={`${classes.chart}`}
							alt="sustainable maritime security chart"
							src="chart.png"
						/>
					</div>
					<div className="d-flex flex-column justify-content-around p-3">
						<div className={`${classes.card}`}>
							<h1> Why Black Seas Consultancy? </h1>
						</div>
						<div className={`${classes.card}`}>
							A synthesis of
							<b className={`${classes.cardKeyWord}`}>
								<i> qualitative </i>
							</b>
							and
							<b className={`${classes.cardKeyWord}`}>
								<i> quantitative </i>
							</b>
							research methods
						</div>
						<div className={`${classes.card}`}>
							A
							<b className={`${classes.cardKeyWord}`}>
								<i> non-partisan </i>
							</b>
							and
							<b className={`${classes.cardKeyWord}`}>
								<i> objective </i>
							</b>
							approach to generating analysis
						</div>
						<div className={`${classes.card}`}>
							A strong focus on underpinning analysis with
							<b className={`${classes.cardKeyWord}`}>
								<i> emperical </i>
							</b>
							evidence
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
