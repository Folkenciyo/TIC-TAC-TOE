import React, { useState } from "react";
import PropTypes from "prop-types";

const Box = props => {
	const [value, setValue] = useState("");

	return (
		<div
			className="box"
			onClick={() => {
				if (!value) {
					setValue(props.value);
					props.changeTurn();
				}
			}}>
			{value}
		</div>
	);
};

Box.propTypes = {
	value: PropTypes.string,
	changeTurn: PropTypes.func
};

export default Box;
