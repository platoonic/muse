import React from 'react';
import logo from './imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Homepage(){
	return(
		<div className="container">
			<div className="row">
				<div className="home col-9">
					<img src={logo} alt="Muse" />
					<h2>Muse is an online jamming platform for musicians.</h2>
					<p className="description">Start by creating a new jamming session or joining an already made one if you have a session code</p>
					<div className="buttons">
						<a className="button blue" href="#"><FontAwesomeIcon icon={faChevronRight} />Join a Jamming Session</a>
						<a className="button pink" href="#"><FontAwesomeIcon icon={faMusic} />Create a Jamming Session</a>
					</div>
				</div>
			</div>
		</div>
	)
}