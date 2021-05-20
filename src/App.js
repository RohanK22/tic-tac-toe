import './App.css';
import React, { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	// Another example
  const [todos, setTodos] = useState([
		{
			text: 'Learn Hooks!',
		},
	]);

	return (
		<div className="App">
			<p>You clicked {count} times</p>
			<button
				onClick={() => {
					return setCount(count + 1);
				}}
			>
				{' '}
				Click Me!{' '}
			</button>
		</div>
	);
}

export default App;
