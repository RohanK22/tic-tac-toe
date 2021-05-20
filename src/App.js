import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
	// State to store 3x3 grid
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turnX, setTurnX] = useState(true);
	const [winner, setWinner] = useState(null);

	const handleClick = (i) => {
		const boardCopy = [...board];
		if (winner || boardCopy[i] != null) return;
		boardCopy[i] = turnX ? 'X' : 'O';
		setBoard(boardCopy);
		setTurnX(!turnX);
		setWinner(calculateWinner(boardCopy));
	};

	useEffect(() => {
		document.getElementById('win-text').innerHTML = winner
			? 'Winner: ' + winner + '! Refresh to play again'
			: 'Next Player: ' + (turnX ? 'X' : 'O');
	}, [board]);

	const boardGUI = () => {
		return (
			<>
				<h1 className="heading">Tic-Tac-Toe</h1>
				<div className="board">
					{board.map((x, i) => {
						return (
							<div
								key={i}
								className="square"
								onClick={() => {
									handleClick(i);
								}}
							>
								{x === null ? '_' : x}
							</div>
						);
					})}
				</div>
				<div id="win-text">
					{winner
						? 'Winner: ' + winner
						: 'Next Player: ' + (turnX ? 'X' : 'O')}
				</div>
			</>
		);
	};

	return <div className="App">{boardGUI()}</div>;
}

// Check for win function : Thanks to https://www.freecodecamp.org/news/learn-how-to-build-tic-tac-toe-with-react-hooks/
function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

export default App;
