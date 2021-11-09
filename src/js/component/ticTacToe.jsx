import React, { useState } from "react";
import PropTypes from "prop-types";

const Box = props => {
	const [value, setValue] = useState("");

	//cambio de turno
	const switchTurn = turn => {
		if (value == "" && turn == true) {
			setValue("👿");
		} else if (value === "" && turn == false) {
			setValue("👼");
		}
		props.changeValue();
	};

	return (
		<div
			className="box"
			onClick={() => {
				switchTurn(props.turn);
				props.saveBoxesValues(props.turn, props.boxesPosition);
			}}>
			{value}
		</div>
	);
};

Box.propTypes = {
	turn: PropTypes.bool,
	changeValue: PropTypes.func,
	boxesPosition: PropTypes.number,
	saveBoxesValues: PropTypes.func
};

export default Box;
