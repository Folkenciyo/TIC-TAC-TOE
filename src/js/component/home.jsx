import React, { useEffect, useState } from "react";
import Box from "./ticTacToe.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { position } from "dom-helpers";

const Home = () => {
	const [turn, setTurn] = useState("👿");

	const changeTurn = () => {
		if (turn == "👿") {
			setTurn("👼");
		} else {
			setTurn("👿");
		}
	};

	const position = ["", "", "", "", "", "", "", "", ""];
	const listOfBoxes = position.map((_, index) => {
		return (
			<Box key={index.toString} value={turn} changeTurn={changeTurn} />
		);
	});

	/* 	const solutions = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	] */

	return (
		<Container>
			<Row>
				{listOfBoxes[0]}
				{listOfBoxes[1]}
				{listOfBoxes[2]}
			</Row>
			<Row>
				{listOfBoxes[3]}
				{listOfBoxes[4]}
				{listOfBoxes[5]}
			</Row>
			<Row>
				{listOfBoxes[6]}
				{listOfBoxes[7]}
				{listOfBoxes[8]}
			</Row>
		</Container>
	);
};
export default Home;
