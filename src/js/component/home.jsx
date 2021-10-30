import React, { useEffect, useState } from "react";
import Box from "./ticTacToe.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { position } from "dom-helpers";

const Home = () => {
	const [turn, setTurn] = useState("👿");
	const [board, setBoard] = useState(new Array(9)); //es el comparador de la partida

	const changeTurn = () => {
		setBoard();
		let winner = calculateWinner(position);
		if (!winner) {
			if (turn == "👿") {
				setTurn("👼");
			} else {
				setTurn("👿");
			}
		}
	};

	//Creacion de las casillas con un index dentro de un array vacio de  9 espacios
	//para poder compararlas con la solucion.
	const position = ["", "", "", "", "", "", "", "", ""];
	const listOfBoxes = position.map((_, index) => {
		return (
			<Box
				key={index.toString}
				value={turn}
				changeTurn={changeTurn}
				ganador={gameStatus}
			/>
		);
	});

	//solution Function
	const calculateWinner = board => {
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
		//se recorre la solucion, si coinciden solution[A=B=C] retornamos 👿 o 👼,
		//que son plenos ganadores
		for (let i = 0; i < solutions.length; i++) {
			const [a, b, c] = solutions[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
			return null;
		}
	};

	//ganad@r
	const theWinner = calculateWinner(listOfBoxes);

	//Esta funcion es para determinar el empate, dado el caso
	const isBoardFull = table => {
		for (let i = 0; i < table.length; i++) {
			if (table[i] == null) {
				return false;
			}
		}
		return true;
	};

	//Determina el estado del juego
	const gameStatus = () => {
		if (theWinner) {
			return console.log(theWinner);
		} else if (isBoardFull(listOfBoxes) === true) {
			return "empate baby";
		} else {
			return console.log("next");
		}
	};

	/* function restart() {
		setBoard(Array(9).fill(null))  //restart the game
	  } */

	return (
		<Container>
			<div className="game-status">{gameStatus()}</div>
			<div>
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
			</div>
		</Container>
	);
};
export default Home;
