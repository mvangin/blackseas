import React, { useState, useEffect } from 'react';
import pressList from '../../dataFiles/press';
import classes from './press.module.css';

function Press() {
	const [regionalThematic, setRegionalThematic] = useState([]);
	const [policyBrief, setPolicyBrief] = useState([]);
	const [openEditorial, setOpenEditorial] = useState([]);
	const [showPress, setShowPress] = useState([]);

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

		const openEditorialList = filterPressListByCategory(
			pressList,
			'open_editorial'
		);
		setOpenEditorial(openEditorialList);
	}, []);

	function renderPressList(pressList) {
		return pressList.map((pressItem) => (
			<li key={pressItem.title}>
				<span>{pressItem.title} </span>
				<br /> {pressItem.publisher} {pressItem.year} {pressItem.author}
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
		<div className={` mt-4 pt-4`} id="press">
			<h1 className={`${classes.pressHeader}`}> Our Publications </h1>
			<div className={`${classes.pressContainer}`}>
				<div className={`${classes.pressSection}`}>
					<button
						className={`${classes.pressExpandButton}`}
						onClick={() => handleShowPress('regionalThematic')}
					>
						<h2 className={`${classes.pressSectionHeader}`}>
							Major Regional and Thematic Reports
							<div
								className={`${classes.downArrow}  ${
									showPress.includes('regionalThematic') &&
									classes.pressedExpandButton
								}`}
							>
								»
							</div>
						</h2>
					</button>
					{showPress.includes('regionalThematic') && (
						<ul>{renderPressList(regionalThematic)}</ul>
					)}
				</div>

				<div className={`${classes.pressSection}`}>
					<button
						className={`${classes.pressExpandButton}`}
						onClick={() => handleShowPress('policyBrief')}
					>
						<h2 className={`${classes.pressSectionHeader}`}>
							Policy Brief Publication
							<div
								className={`${classes.downArrow} ${
									showPress.includes('policyBrief') &&
									classes.pressedExpandButton
								} `}
							>
								»
							</div>
						</h2>
					</button>
					{showPress.includes('policyBrief') && (
						<ul>{renderPressList(policyBrief)}</ul>
					)}
				</div>

				<div className={`${classes.pressSection}`}>
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
				</div>
			</div>
		</div>
	);
}

export default Press;
