import React, { useState } from 'react';
import logo from './imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Icons
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
//Components
import JoinSession from './JoinSession'

export default function Homepage(props){
	//Join Session Box state (Hidden by default)
	const [showJoin, joinVisible] = useState(0)
	const [showCreate, createVisible] = useState(0)
	return(
		<div className="container">
			<div className="row">
				<div className="home col-9">
					<img src={logo} alt="Muse" />
					<h2>Muse is an online jamming platform for musicians.</h2>
					<p className="description">Start by creating a new jamming session or joining an already made one if you have a session code</p>
					<div className="buttons">
						<a className="button blue" href="#" onClick={ () => { joinVisible(1) }}><FontAwesomeIcon icon={faChevronRight} />Join a Jamming Session</a>
						<a className="button pink" href="#" onClick={ () => { createVisible(1) }}><FontAwesomeIcon icon={faMusic} />Create a Jamming Session</a>
					</div>
				</div>
				{ showJoin == 1 &&
					<div>
						<div class="overlay" onClick={() => { joinVisible(0) }}/>
						<JoinSession setInsideSession={props.setInsideSession}/>
					</div>
				}
			</div>
		</div>
	)
}