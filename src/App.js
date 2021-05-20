import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
	// State to store 3x3 grid
	const [board, setBoard] = useState(Array(9).fill(null));
	const boardGUI = () => {
		return (
			<div className="board">
				{board.map((x) => {
					return (
						<div key={Math.random()} className="square">
							{x === null ? '_' : x}
						</div>
					);
				})}
			</div>
		);
	};

	return <div className="App">{boardGUI()}</div>;
}

export default App;
