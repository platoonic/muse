import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'

export default class JamSession extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			jamName: 'JamSessionNameHere',
			latency: 8,
			tempo: 120,
			metronome: false,
			participants: [{
				name: 'John Doe (me)',
				instrument: 'piano'	
			},{
				name: 'Khalid Khalil',
				instrument: 'violin'
			}]
		}
	}
	toggleMetronome = () => {
		this.setState({ metronome: !this.state.metronome })
	}
	handleTempo = (e) => {
		const currentTempo = this.state.tempo
		let newTempo = e.target.value
		const reg = /^(\s*|\d+)$/	
		if(!newTempo.match(reg) || newTempo.length > 3){
			e.target.value = currentTempo		
		}else{
			this.setState({ tempo: newTempo })
		}
	}
	handleEmptyTempo = (e) => {
		let newTempo = e.target.value
		if(newTempo == "" || newTempo < 1){
			e.target.value = "60"
		}
	}
	render(){
		return(
			<div class="container">
				<div class="row session">
					<div class="col-10">
						<h4>{this.state.jamName}</h4>
					</div>
					<div class="col-2">
						<span class="latency">Latency: {this.state.latency}ms</span>
					</div>
				</div>
				<div class="row participants">
					<div class="col-2">
						<h4>Participants</h4>
					</div>
					<div class="col-10">
						{this.state.participants.map((participant) => {
							return <div class="participant">
								<img src={require('./imgs/'+participant.instrument+'.png')} alt="piano"/>
								<div class="data">
									<div>
										<span class="name">{participant.name}</span>
										<FontAwesomeIcon icon={faWifi} />
									</div>
									<input type="range" min="1" max="100" defaultValue="100" class="slider" id="myRange" />
								</div>
							</div>
						})}
					</div>
				</div>
				<div class="row">
					<div class="controls col-7">
						<div class="tempo-box">
							<input onBlur={(e) => {this.handleEmptyTempo(e)}} onChange={(e) => {this.handleTempo(e)} } type="text" class="tempo" defaultValue={this.state.tempo}/>
							<span>BPM</span>
						</div>
						<a onClick={this.toggleMetronome} class="metronome" href="#">Metronome <span class={this.state.metronome == false ? 'off' : 'on'}>{this.state.metronome == false ? 'OFF' : 'ON'}</span></a>
					</div>
					<div class="col-5">
						<div class="jam-buttons">
							<a class="button blue" href="#">Invite Others</a>
							<a onClick={() => {this.props.setInsideSession(0)}} class="button red" href="#">Leave Jam</a>
						</div>
					</div>
				</div>
			</div>
		)
	}














}