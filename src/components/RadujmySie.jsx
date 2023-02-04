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
	});

	const { sopran, alt, tenor } = voice;

	const handleInputChange = (e) => {
		setVoice({
			...voice,
			[e.target.id]: !voice[e.target.id],
		});
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
			</div>

			<div className="audio-container">
				{sopran && !alt && !tenor ? (
					<audio src={rsSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor ? (
					<audio src={rsAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt ? (
					<audio src={rsTenor} id="tenor-audio" controls />
				) : null}
				{sopran && alt && !tenor ? (
					<audio src={rsSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt ? (
					<audio src={rsSopranTenor} id="sopran-tenor-audio" controls />
				) : null}

				{alt && tenor && !sopran ? (
					<audio src={rsAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{sopran && alt && tenor ? (
					<audio src={rsAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img4r1} className="rs" alt="radujmy-sie - nuty1" />
				<img src={img4r2} className="rs" alt="radujmy-sie - nuty2" />
			</div>
		</div>
	);
};

export default RadujmySie;
