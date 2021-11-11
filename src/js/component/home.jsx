import React, { useEffect, useState } from "react";
import Box from "./ticTacToe.jsx";
import sotoWilly from "../../img/sotoWilly.png";
import sotoWilly2 from "../../img/sotoWilly2.png";

const Home = () => {
	const [turn, setTurn] = useState(true);
	const [boardValue, setBoardValue] = useState(new Array(9).fill(null));
	const [state, setState] = useState("SOTO EMPIEZA");
	const [button, setButton] = useState("");
	let board = [];

	//RESETEAR EL TABLERO
	const resetBoard = () => {};

	//GUARDA LA POSICION EN CADA JUGADA
	const saveBoxesValue = (value, boxesPosition) => {
		const boxes = [...boardValue];

		boxes[boxesPosition] = value;
		setBoardValue(boxes);
		console.log("boxes", boxes);

		let winner = solutionsWinner(boxes);

		if (winner === true) {
			setState("Ha ganado Soto... Soto: - ¡Pues no haber follao!");
			setButton("Dale Willy");
		} else if (winner === false) {
			setState("Ha ganado Willy... Willy: - ...Sozpechozo...");
			setButton("Dale Soto");
		} else if (winner === null) {
			setState("Te toca => " + (turn ? "WILLY" : "SOTO"));
			setButton("RESET");
		}
	};

	//CAMBIA EL TURNO
	const changeValue = () => {
		setTurn(!turn);
	};

	//CREA EL TABLERO

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
		<div className="body">
			<audio
				src="https://www.bensound.com/bensound-music/bensound-epic.mp3"
				autoPlay
			/>
			<div className="state">
				{state}
				<input
					className="reset"
					type="button"
					value={button}
					onClick={event => {
						window.location.reload();
						event.preventDefault();
					}}
				/>
			</div>
			<div>
				<div className="table">
					<div></div>
					<div>
						{board[0]}
						{board[1]}
						{board[2]}
					</div>
					<div>
						{board[3]}
						{board[4]}
						{board[5]}
					</div>
					<div>
						{board[6]}
						{board[7]}
						{board[8]}
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
