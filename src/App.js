import React, { useState } from 'react';
//CSS
import './css/normalize.css'
import './css/bootstrap-grid.min.css'
import './css/theme.css'
//Components
import Homepage from './homepage'
import JamSession from './jamSession'

function App() {
	const [insideJam, setInsideJam] = useState(1)
	return (
	<div className="App">
		{ insideJam == false ? <Homepage setInsideSession={setInsideJam}/> : <JamSession setInsideSession={setInsideJam}/> }
	</div>
	);
}

export default App;