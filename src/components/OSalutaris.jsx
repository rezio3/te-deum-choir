import React, { useState } from "react";
import "../style/css/DownContent.css";
import osSopran from "../audio/o-salutaris/sopran.mp3";
import osAlt from "../audio/o-salutaris/alt.mp3";
import osTenor from "../audio/o-salutaris/tenor.mp3";
import osBas from "../audio/o-salutaris/bas.mp3";
import osSopranAlt from "../audio/o-salutaris/sopran-alt.mp3";
import osSopranTenor from "../audio/o-salutaris/sopran-tenor.mp3";
import osSopranBass from "../audio/o-salutaris/sopran-bas.mp3";
import osAltTenor from "../audio/o-salutaris/alt-tenor.mp3";
import osAltBass from "../audio/o-salutaris/alt-bas.mp3";
import osTenorBass from "../audio/o-salutaris/tenor-bas.mp3";
import osSopranAltTenor from "../audio/o-salutaris/sopran-alt-tenor.mp3";
import osSopranTenorBass from "../audio/o-salutaris/sopran-tenor-bas.mp3";
import osSopranAltBass from "../audio/o-salutaris/sopran-alt-bas.mp3";
import osAltTenorBass from "../audio/o-salutaris/alt-tenor-bas.mp3";
import osAll from "../audio/o-salutaris/all.mp3";
import img from "../img/o salutaris.webp";

const OSalutaris = (props) => {
	console.log("strona");
	const [voice, setVoice] = useState({
		sopran: false,
		alt: false,
		tenor: false,
		bas: false,
	});

	const { sopran, alt, tenor, bas } = voice;

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

			<div className="audio-container">
				{sopran && !alt && !tenor && !bas ? (
					<audio src={osSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor && !bas ? (
					<audio src={osAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt && !bas ? (
					<audio src={osTenor} id="tenor-audio" controls />
				) : null}
				{bas && !sopran && !alt && !tenor ? (
					<audio src={osBas} id="bas-audio" controls />
				) : null}
				{sopran && alt && !tenor && !bas ? (
					<audio src={osSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt && !bas ? (
					<audio src={osSopranTenor} id="sopran-tenor-audio" controls />
				) : null}
				{sopran && bas && !alt && !tenor ? (
					<audio src={osSopranBass} id="sopran-bas-audio" controls />
				) : null}
				{alt && tenor && !sopran && !bas ? (
					<audio src={osAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{alt && bas && !sopran && !tenor ? (
					<audio src={osAltBass} id="alt-bas-audio" controls />
				) : null}
				{tenor && bas && !sopran && !alt ? (
					<audio src={osTenorBass} id="tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && !bas ? (
					<audio src={osSopranAltTenor} id="sopran-alt-tenor-audio" controls />
				) : null}
				{sopran && tenor && bas && !alt ? (
					<audio src={osSopranTenorBass} id="sopran-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && bas && !tenor ? (
					<audio src={osSopranAltBass} id="sopran-alt-bas-audio" controls />
				) : null}
				{alt && tenor && bas && !sopran ? (
					<audio src={osAltTenorBass} id="alt-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && bas ? (
					<audio src={osAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img} className="notes" alt="O Salutaris - nuty" />
			</div>
		</div>
	);
};

export default OSalutaris;
