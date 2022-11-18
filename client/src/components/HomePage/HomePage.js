import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import classes from './homePage.module.css';
import Press from '../Press/Press';
import ContactUs from '../ContactUs/ContactUs';
import BaseButton from '../shared/BaseButton/BaseButton';

function Homepage() {
	return (
		<>
			<div id="homepage">
				<div>
					<div className={`${classes.diagonalBox} jumbotron`}>
						<div
							className={`${classes.homepageContainer}   ${classes.content}`}
						>
							<div className={`${classes.homepageInner} `}>
								<div>
									<h1 className={`${classes.homepageTitle} `}>
										Helping Clients Navigate Security <br />
										Challenges in the Maritime Domain
									</h1>
								</div>
								{
									<div className={`${classes.linkContainer}`}>
										<a href="#press">
											<BaseButton
                                            className={'text-white'}
                                                variant={"outline-primary"}
												buttonText={'Learn More'}
                                                arrow={"true"}
											/>
										</a>
									</div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*<AboutUs />*/}
			<Press />
			<ContactUs />
		</>
	);
}

export default Homepage;
