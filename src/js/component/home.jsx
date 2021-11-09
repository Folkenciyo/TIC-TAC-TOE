import React, { useEffect, useState } from "react";
import Box from "./ticTacToe.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = () => {
	const [turn, setTurn] = useState(true);
	const [boardValue, setBoardValue] = useState(new Array(9).fill(null));
	const [state, setState] = useState("Demons Start");

	//GUARDA LA POSICION EN CADA JUGADA
	const saveBoxesValue = (value, boxesPosition) => {
		const boxes = [...boardValue];

		boxes[boxesPosition] = value;
		setBoardValue(boxes);
		console.log("boxes", boxes);

		let winner = solutionsWinner(boxes);

		if (winner === true) {
			setState("Demon Wins");
		} else if (winner === false) {
			setState("Angel Wins");
		} else if (winner === null) {
			setState("Is your Turn => " + (turn ? "👿" : "👼"));
		}
	};

	//CAMBIA EL TURNO
	const changeValue = () => {
		setTurn(!turn);
	};

	//CREA EL TABLERO
	let board = [];
	for (let i = 0; i < 9; i++) {
		board.push(
			<Box
				turn={turn}
				key={i.toString()}
				boxesPosition={i}
				changeValue={changeValue}
				saveBoxesValues={saveBoxesValue}
			/>
		);
	}

	//SOLUCION Y COMPARATIVA
	const solutionsWinner = boxes => {
		const solutions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let i = 0; i < solutions.length; i++) {
			const [a, b, c] = solutions[i];
			if (
				boxes[a] != null &&
				boxes[a] === boxes[b] &&
				boxes[a] === boxes[c]
			) {
				return boxes[a];
			}
		}
		return null;
	};

	return (
		<Container>
			<Row>{state}</Row>
			<Row>
				{" "}
				{board[0]}
				{board[1]}
				{board[2]}{" "}
			</Row>
			<Row>
				{" "}
				{board[3]}
				{board[4]}
				{board[5]}{" "}
			</Row>
			<Row>
				{" "}
				{board[6]}
				{board[7]}
				{board[8]}{" "}
			</Row>
		</Container>
	);
};

export default Home;
