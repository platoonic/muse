import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Imgs
import Piano from './imgs/piano.png'
import Accordion from './imgs/accordion.png'
import AcousticGuitar from './imgs/acoustic-guitar.png'
import ElectricGuitar from './imgs/electric-guitar.png'
import Flute from './imgs/flute.png'
import Violin from './imgs/violin.png'
//Icons
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function JoinSession(props){
	const [instrument, setInstrument] = useState("piano")
	return(
		<div className="overlay-box">
			<div className="session-code">
				<h3>Session Code</h3>
				<input type="text" placeholder="3WZ4W" name="session-code" />
			</div>
			<div className="instrument">
				<h3>Instrument</h3>
				<nav className="instruments">
					<a onClick={() => { setInstrument("piano") }} className={instrument == "piano" && "active"} href="#">
						<img src={Piano} alt="Piano" />
						<span>Piano</span>
					</a>
					<a onClick={() => { setInstrument("acoustic-guitar") }}className={instrument == "acoustic-guitar" && "active"} href="#">
						<img src={AcousticGuitar} alt="AcousticGuitar" />
						<span>Acoustic Guitar</span>
					</a>
					<a onClick={() => { setInstrument("electric-guitar") }}className={instrument == "electric-guitar" && "active"} href="#">
						<img src={ElectricGuitar} alt="ElectricGuitar" />
						<span>Electric Guitar</span>
					</a>
					<a onClick={() => { setInstrument("flute") }}className={instrument == "flute" && "active"} href="#">
						<img src={Flute} alt="Flute" />
						<span>Flute</span></a>
					<a onClick={() => { setInstrument("accordion") }}className={instrument == "accordion" && "active"} href="#">
						<img src={Accordion} alt="Accordion" />
						<span>Accordion</span>
					</a>
					<a onClick={() => { setInstrument("violin") }}className={instrument == "violin" && "active"} href="#">
						<img src={Violin} alt="Violin" />
						<span>Violin</span>
					</a>
				</nav>
			</div>
			<div className="clear" />
			<div className="join">
				<a onClick={() => {props.setInsideSession(1)} } className="button green small" href="#">Join <FontAwesomeIcon icon={faChevronRight}/></a>
			</div>
		</div>
	)
}