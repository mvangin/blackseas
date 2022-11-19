import React from 'react';
import Card from 'react-bootstrap/Card';
import classes from './aboutUs.module.css';

function AboutUs() {
	return (
		<div className={`${classes.diagonal}`}>
			<div className={`${classes.content} pt-1`}>
				<div id="about_us" className="pt-1">
					<div className={`${classes.aboutUsHeader}`}>
						<h1
							style={{ fontSize: '2.5rem' }}
							className="text-center pt-4 text-white"
						>
							Analyzing emerging{' '}
							<span className="text-danger"> threat </span>vectors
							in the <br /> maritime domain.
						</h1>
					</div>
					<div className="d-flex justify-content-around flex-wrap">
						<Card
							className={`${classes.cardContainer}`}
							style={{ borderRadius: '20px', width: '18rem' }}
						>
							<Card.Title className="text-center p-2">
								<img
									style={{ borderRadius: '20px' }}
									alt="data chart"
									src="dataChart.jpeg"
									height={80}
									width={80}
								/>
							</Card.Title>
							<Card.Body className={`${classes.cardBody}`}>
								A synthesis of{' '}
								<b className={`${classes.cardKeyWord}`}>
									<i> qualitative </i>
								</b>{' '}
								and{' '}
								<b className={`${classes.cardKeyWord}`}>
									<i> quantitative </i>
								</b>{' '}
								research methods
							</Card.Body>
						</Card>
						<Card
							className={`${classes.cardContainer}`}
							style={{ borderRadius: '20px', width: '18rem' }}
						>
							<Card.Title className="text-center p-2">
								<img
									alt="bullseye"
									src="bullseye.png"
									height={80}
									width={80}
								/>
							</Card.Title>
							<Card.Body className={`${classes.cardBody}`}>
								A{' '}
								<b className={`${classes.cardKeyWord}`}>
									{' '}
									<i> non-partisan </i>
								</b>{' '}
								and
								<b className={`${classes.cardKeyWord}`}>
									{' '}
									<i> objective </i>{' '}
								</b>{' '}
								approach to generating analysis
							</Card.Body>
						</Card>
						<Card
							className={`${classes.cardContainer}`}
							style={{ borderRadius: '20px', width: '18rem' }}
						>
							<Card.Title className="text-center p-2">
								<img
									style={{ borderRadius: '20px' }}
									alt="datachart"
									src="dataChart.jpeg"
									height={80}
									width={80}
								/>
							</Card.Title>
							<Card.Body className={`${classes.cardBody}`}>
								A strong focus on underpinning analysis with{' '}
								<b className={`${classes.cardKeyWord}`}>
									<i> emperical </i>
								</b>{' '}
								evidence
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
