import React, { useEffect, useState } from 'react';
import pressList from '../../dataFiles/press';
import BaseButton from '../shared/BaseButton/BaseButton';
import classes from './press.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

function Press() {
	const [regionalThematic, setRegionalThematic] = useState([]);
	const [policyBrief, setPolicyBrief] = useState([]);

	useEffect(() => {
		const regionalThematicList = filterPressListByCategory(
			pressList,
			'major_regional_thematic_report'
		);
		setRegionalThematic(regionalThematicList);

		const policyBriefList = filterPressListByCategory(
			pressList,
			'policy_brief_publication'
		);
		setPolicyBrief(policyBriefList);
	}, []);

	function renderPressList(pressList) {
		return pressList.map((pressItem) => (
			<li key={pressItem.title} className="">
				{pressItem.imageSrc && (
					<div className="">
						<img
							style={{ borderRadius: '20px' }}
							alt="press preview"
							src={pressItem.imageSrc}
							width={'100%'}
							height="175"
						/>
					</div>
				)}
				<div className="">
					<h2 className={classes.pressTitle}>{pressItem.title} </h2>
					<div className="mt-3">{pressItem.previewText}</div>
					<a
						className={`${classes.link}`}
						href={pressItem.link}
						target="_blank"
						rel="noreferrer"
					>
						<BaseButton
							className="text-start p-0"
							buttonText={'See More'}
							outline={false}
							arrow="true"
						/>
					</a>
				</div>
			</li>
		));
	}

	function isEvenInteger(integer) {
		console.debug(integer, integer % 2 === 0);
		return integer % 2 === 0 ? true : false;
	}

	function renderPrimaryPressList(pressList) {
		return pressList.map((pressItem, index) => {
			const slideDirection = isEvenInteger(index + 1)
				? 'slideInLeft'
				: 'slideInRight';

			return (
				<li
					key={pressItem.title}
					className={`d-flex flex-wrap ${classes.primaryPressList} ${
						isEvenInteger(index + 1) ? 'flex-row-reverse' : ''
					}`}
				>
					{pressItem.imageSrc && (
						<div className={`${classes.imageContainer}`}>
							<img
								alt="press preview"
								src={pressItem.imageSrc}
								width="100%"
								height="100%"
							/>
						</div>
					)}
					<div className={`${classes.titleContainer} d-flex`}>
						<a
							className={`${classes.link} ${classes.primaryLink}`}
							href={pressItem.link}
							target="_blank"
							rel="noreferrer"
						>
							<h3 className={`${classes.primaryPressTitle}`}>
								<ScrollAnimation
									animateOnce={true}
									animateIn={slideDirection}
								>
									{pressItem.title}
								</ScrollAnimation>
							</h3>

							<i className={`${classes.articleInfo}`}>
								<ScrollAnimation
									animateOnce={true}
									animateIn={slideDirection}
								>
									{pressItem.publisher} {pressItem.year}
								</ScrollAnimation>
							</i>
							<ScrollAnimation
								animateOnce={true}
								animateIn={slideDirection}
							>
								<div>{pressItem.previewText}</div>

								<BaseButton
									buttonText={'See More'}
									outline={false}
									arrow="true"
								/>
							</ScrollAnimation>
						</a>
					</div>
				</li>
			);
		});
	}

	function filterPressListByCategory(pressList, category) {
		return pressList.filter((pressItem) => pressItem.category === category);
	}

	return (
		<div className={`mt-2`} id="press">
			<div className={`${classes.pressContainer}`}>
				<div>
					<ul>{renderPrimaryPressList(regionalThematic)}</ul>
				</div>

				<div className={`${classes.pressSection}`}>
					<hr className={`${classes.horizontalLine}`} />

					<span className={`${classes.pressSectionHeader}`}>
						Featured Policy Brief Publications
					</span>
                    
					<ul className="">{renderPressList(policyBrief)}</ul>
				</div>
			</div>
		</div>
	);
}

export default Press;
