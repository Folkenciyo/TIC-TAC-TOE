import React, { useState } from "react";
import PropTypes from "prop-types";
import sotofinal from "../../img/sotofinal.png";
import willy from "../../img/willy.png";

const Box = props => {
	const [value, setValue] = useState("");

	//cambio de turno
	const switchTurn = turn => {
		if (value == "" && turn == true) {
			setValue(<img src={sotofinal} />);
		} else if (value === "" && turn == false) {
			setValue(<img src={willy} />);
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
