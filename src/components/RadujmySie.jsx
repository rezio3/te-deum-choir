import React, { useState } from "react";
import "../style/css/DownContent.css";
import img4r1 from "../img/radujmy-sie1.jpg";
import img4r2 from "../img/radujmy-sie2.jpg";
import rsSopran from "../audio/radujmy-sie/sopran.mp3";
import rsAlt from "../audio/radujmy-sie/alt.mp3";
import rsTenor from "../audio/radujmy-sie/tenor.mp3";
import rsSopranAlt from "../audio/radujmy-sie/sopran-alt.mp3";
import rsSopranTenor from "../audio/radujmy-sie/sopran-tenor.mp3";
import rsAltTenor from "../audio/radujmy-sie/alt-tenor.mp3";
import rsAll from "../audio/radujmy-sie/all.mp3";

const RadujmySie = (props) => {
	const [voice, setVoice] = useState({
		sopran: false,
		alt: false,
		tenor: false,
		bas: false,
		// play: false,
	});

	const { sopran, alt, tenor, bas, play } = voice;

	const handleInputChange = (e) => {
		setVoice({
			...voice,
			[e.target.id]: !voice[e.target.id],
		});
	};

	const pauseAudio = () => {
		setVoice({
			...voice,
			play: false,
		});
	};

	const playAudio = () => {
		setVoice({
			...voice,
			play: false,
		});
		setTimeout(() => {
			setVoice({
				...voice,
				play: true,
			});
		}, 100);
	};
	return (
		<div className="down-content">
			<h2 className="piece-name-header">{props.state.pieceName}</h2>
			<div className="select-voice-container">
				<label htmlFor="sopran">
					Sopran
					<input
						type="checkbox"
						id="sopran"
						onChange={handleInputChange}
						checked={sopran}
					/>
				</label>
				<label htmlFor="alt">
					Alt
					<input
						type="checkbox"
						id="alt"
						onChange={handleInputChange}
						checked={alt}
					/>
				</label>
				<label htmlFor="tenor">
					Tenor
					<input
						type="checkbox"
						id="tenor"
						onChange={handleInputChange}
						checked={tenor}
					/>
				</label>
				<label htmlFor="bas">
					Bas
					<input
						type="checkbox"
						id="bas"
						onChange={handleInputChange}
						checked={bas}
						disabled={true}
					/>
				</label>
			</div>
			<div className="buttons-container">
				<button className="play-btn" onClick={playAudio}>
					Graj
				</button>
				<button className="play-btn" onClick={pauseAudio}>
					Stop
				</button>
			</div>

			<div className="notes-container">
				<img src={img4r1} className="rs" alt="radujmy-sie - nuty1" />
				<img src={img4r2} className="rs" alt="radujmy-sie - nuty2" />
			</div>
			<div className="audio-container">
				{sopran && !alt && !tenor && play ? (
					<audio src={rsSopran} id="sopran-audio" autoPlay />
				) : null}
				{alt && !sopran && !tenor && play ? (
					<audio src={rsAlt} id="alt-audio" autoPlay />
				) : null}
				{tenor && !sopran && !alt && play ? (
					<audio src={rsTenor} id="tenor-audio" autoPlay />
				) : null}
				{sopran && alt && !tenor && play ? (
					<audio src={rsSopranAlt} id="sopran-alt-audio" autoPlay />
				) : null}
				{sopran && tenor && !alt && play ? (
					<audio src={rsSopranTenor} id="sopran-tenor-audio" autoPlay />
				) : null}

				{alt && tenor && !sopran && play ? (
					<audio src={rsAltTenor} id="alt-tenor-audio" autoPlay />
				) : null}
				{sopran && alt && tenor && play ? (
					<audio src={rsAll} id="all-audio" autoPlay />
				) : null}
			</div>
		</div>
	);
};

export default RadujmySie;
