import React, { useState } from "react";
import "../style/css/DownContent.css";
import img1 from "../img/dzieki-Ci-Panie.jpg";
import dCPSopran from "../audio/dzieki-Ci-Panie-refren/sopran.mp3";
import dCPAlt from "../audio/dzieki-Ci-Panie-refren/alt.mp3";
import dCPTenor from "../audio/dzieki-Ci-Panie-refren/tenor.mp3";
import dCPBas from "../audio/dzieki-Ci-Panie-refren/bas.mp3";
import dCPSopranAlt from "../audio/dzieki-Ci-Panie-refren/sopran-alt.mp3";
import dCPSopranTenor from "../audio/dzieki-Ci-Panie-refren/sopran-tenor.mp3";
import dCPSopranBass from "../audio/dzieki-Ci-Panie-refren/sopran-bas.mp3";
import dCPAltTenor from "../audio/dzieki-Ci-Panie-refren/alt-tenor.mp3";
import dCPAltBass from "../audio/dzieki-Ci-Panie-refren/alt-bas.mp3";
import dCPTenorBass from "../audio/dzieki-Ci-Panie-refren/tenor-bas.mp3";
import dCPSopranAltTenor from "../audio/dzieki-Ci-Panie-refren/sopran-alt-tenor.mp3";
import dCPSopranTenorBass from "../audio/dzieki-Ci-Panie-refren/sopran-tenor-bas.mp3";
import dCPSopranAltBass from "../audio/dzieki-Ci-Panie-refren/sopran-alt-bas.mp3";
import dCPAltTenorBass from "../audio/dzieki-Ci-Panie-refren/alt-tenor-bas.mp3";
import dCPAll from "../audio/dzieki-Ci-Panie-refren/all.mp3";

const DownContent1 = (props) => {
	const [voice, setVoice] = useState({
		sopran: false,
		alt: false,
		tenor: false,
		bas: false,
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
				<img src={img1} className="notes" />
			</div>
			<div className="audio-container">
				{sopran && !alt && !tenor && !bas && play ? (
					<audio src={dCPSopran} id="sopran-audio" autoPlay />
				) : null}
				{alt && !sopran && !tenor && !bas && play ? (
					<audio src={dCPAlt} id="alt-audio" autoPlay />
				) : null}
				{tenor && !sopran && !alt && !bas && play ? (
					<audio src={dCPTenor} id="tenor-audio" autoPlay />
				) : null}
				{bas && !sopran && !alt && !tenor && play ? (
					<audio src={dCPBas} id="bas-audio" autoPlay />
				) : null}
				{sopran && alt && !tenor && !bas && play ? (
					<audio src={dCPSopranAlt} id="sopran-alt-audio" autoPlay />
				) : null}
				{sopran && tenor && !alt && !bas && play ? (
					<audio src={dCPSopranTenor} id="sopran-tenor-audio" autoPlay />
				) : null}
				{sopran && bas && !alt && !tenor && play ? (
					<audio src={dCPSopranBass} id="sopran-bas-audio" autoPlay />
				) : null}
				{alt && tenor && !sopran && !bas && play ? (
					<audio src={dCPAltTenor} id="alt-tenor-audio" autoPlay />
				) : null}
				{alt && bas && !sopran && !tenor && play ? (
					<audio src={dCPAltBass} id="alt-bas-audio" autoPlay />
				) : null}
				{tenor && bas && !sopran && !alt && play ? (
					<audio src={dCPTenorBass} id="tenor-bas-audio" autoPlay />
				) : null}
				{sopran && alt && tenor && !bas && play ? (
					<audio src={dCPSopranAltTenor} id="sopran-alt-tenor-audio" autoPlay />
				) : null}
				{sopran && tenor && bas && !alt && play ? (
					<audio
						src={dCPSopranTenorBass}
						id="sopran-tenor-bas-audio"
						autoPlay
					/>
				) : null}
				{sopran && alt && bas && !tenor && play ? (
					<audio src={dCPSopranAltBass} id="sopran-alt-bas-audio" autoPlay />
				) : null}
				{alt && tenor && bas && !sopran && play ? (
					<audio src={dCPAltTenorBass} id="alt-tenor-bas-audio" autoPlay />
				) : null}
				{sopran && alt && tenor && bas && play ? (
					<audio src={dCPAll} id="all-audio" autoPlay />
				) : null}
			</div>
		</div>
	);
};

export default DownContent1;
