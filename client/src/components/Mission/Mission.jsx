import classes from './mission.module.css';

function Mission() {
	return (
		<div
			id="mission"
			className={`${classes.missionWrapper} d-flex flex-wrap justify-content-center`}
		>
			<div className={`${classes.missionContainer}`}>
				<h1>Our Purpose </h1>
				We strive to enhance maritime governance and coastal prosperity
				through innovative approaches to maritime security research
				<hr />
			</div>
			<div className={`${classes.missionContainer}`}>
				<h1>Our People</h1>
				Our talented team works closely with local stakeholders and
				thematic experts to generate diverse and inclusive perspectives
				<hr />
			</div>
			<div className={`${classes.missionContainer}`}>
				<h1>Our Governance</h1>
				As a value-driven organization we work to meet the highest
				ethical and professional standards throughout our work
				<hr />
			</div>
		</div>
	);
}

export default Mission;
