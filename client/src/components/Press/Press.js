import React, { useEffect, useState } from 'react';
import pressList from '../../dataFiles/press';
import BaseButton from '../shared/BaseButton/BaseButton';
import classes from './press.module.css';

function Press() {
	const [regionalThematic, setRegionalThematic] = useState([]);
	const [policyBrief, setPolicyBrief] = useState([]);
	//const [openEditorial, setOpenEditorial] = useState([]);
	const [showPress, setShowPress] = useState([
		'regionalThematic',
		'policyBrief',
	]);

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

		// const openEditorialList = filterPressListByCategory(
		// 	pressList,
		// 	'open_editorial'
		// );
		//setOpenEditorial(openEditorialList);
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
		return pressList.map((pressItem, index) => (
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
							{pressItem.title}
						</h3>

						<i className={`${classes.articleInfo}`}>
							{pressItem.publisher} {pressItem.year}
						</i>
						<div>{pressItem.previewText}</div>

						<BaseButton
							buttonText={'See More'}
							outline={false}
							arrow="true"
						/>
					</a>
				</div>
			</li>
		));
	}

	function filterPressListByCategory(pressList, category) {
		return pressList.filter((pressItem) => pressItem.category === category);
	}

	function handleShowPress(category) {
		if (showPress.includes(category)) {
			setShowPress((prevState) =>
				prevState.filter((item) => item !== category)
			);
			return;
		}

		setShowPress((prevState) => [...prevState, category]);
	}

	return (
		<div className={`mt-2`} id="press">
			<div className={`${classes.pressContainer}`}>
				<div>
					<button
						className={`${classes.pressExpandButton}`}
						onClick={() => handleShowPress('regionalThematic')}
					></button>
					{showPress.includes('regionalThematic') && (
						<ul>{renderPrimaryPressList(regionalThematic)}</ul>
					)}
				</div>

				<div className={`${classes.pressSection}`}>
					<hr className={`${classes.horizontalLine}`} />

					<span className={`${classes.pressSectionHeader}`}>
						Featured Policy Brief Publications
						<div
							className={`${classes.downArrow} ${
								showPress.includes('policyBrief') &&
								classes.pressedExpandButton
							} `}
						>
							»
						</div>
					</span>
					{showPress.includes('policyBrief') && (
						<ul className="">{renderPressList(policyBrief)}</ul>
					)}
				</div>

				{/*<div
					className={`${classes.pressSection} ${classes.editorials}`}
				>
					<button
						className={`${classes.pressExpandButton}`}
						onClick={() => handleShowPress('openEditorial')}
					>
						<h2 className={`${classes.pressSectionHeader} `}>
							Open Editorials
							<div
								className={`${classes.downArrow} ${
									showPress.includes('openEditorial') &&
									classes.pressedExpandButton
								} `}
							>
								»
							</div>
						</h2>
					</button>
					<div>
						{showPress.includes('openEditorial') && (
							<ul>{renderPressList(openEditorial)}</ul>
						)}
					</div>
                        </div>*/}
			</div>
		</div>
	);
}

export default Press;
