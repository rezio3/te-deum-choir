import React, { useState } from "react";
import "../style/css/DownContent.css";
import img1 from "../img/dzieki-Ci-Panie.jpg";
import dCPSopran from "../audio/dzieki-Ci-Panie/sopran.mp3";
import dCPAlt from "../audio/dzieki-Ci-Panie/alt.mp3";
import dCPTenor from "../audio/dzieki-Ci-Panie/tenor.mp3";
import dCPBas from "../audio/dzieki-Ci-Panie/bas.mp3";
import dCPSopranAlt from "../audio/dzieki-Ci-Panie/sopran-alt.mp3";
import dCPSopranTenor from "../audio/dzieki-Ci-Panie/sopran-tenor.mp3";
import dCPSopranBass from "../audio/dzieki-Ci-Panie/sopran-bas.mp3";
import dCPAltTenor from "../audio/dzieki-Ci-Panie/alt-tenor.mp3";
import dCPAltBass from "../audio/dzieki-Ci-Panie/alt-bas.mp3";
import dCPTenorBass from "../audio/dzieki-Ci-Panie/tenor-bas.mp3";
import dCPSopranAltTenor from "../audio/dzieki-Ci-Panie/sopran-alt-tenor.mp3";
import dCPSopranTenorBass from "../audio/dzieki-Ci-Panie/sopran-tenor-bas.mp3";
import dCPSopranAltBass from "../audio/dzieki-Ci-Panie/sopran-alt-bas.mp3";
import dCPAltTenorBass from "../audio/dzieki-Ci-Panie/alt-tenor-bas.mp3";
import dCPAll from "../audio/dzieki-Ci-Panie/all.mp3";

const DziekiCiPanie = (props) => {
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
					<audio src={dCPSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor && !bas ? (
					<audio src={dCPAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt && !bas ? (
					<audio src={dCPTenor} id="tenor-audio" controls />
				) : null}
				{bas && !sopran && !alt && !tenor ? (
					<audio src={dCPBas} id="bas-audio" controls />
				) : null}
				{sopran && alt && !tenor && !bas ? (
					<audio src={dCPSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt && !bas ? (
					<audio src={dCPSopranTenor} id="sopran-tenor-audio" controls />
				) : null}
				{sopran && bas && !alt && !tenor ? (
					<audio src={dCPSopranBass} id="sopran-bas-audio" controls />
				) : null}
				{alt && tenor && !sopran && !bas ? (
					<audio src={dCPAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{alt && bas && !sopran && !tenor ? (
					<audio src={dCPAltBass} id="alt-bas-audio" controls />
				) : null}
				{tenor && bas && !sopran && !alt ? (
					<audio src={dCPTenorBass} id="tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && !bas ? (
					<audio src={dCPSopranAltTenor} id="sopran-alt-tenor-audio" controls />
				) : null}
				{sopran && tenor && bas && !alt ? (
					<audio
						src={dCPSopranTenorBass}
						id="sopran-tenor-bas-audio"
						controls
					/>
				) : null}
				{sopran && alt && bas && !tenor ? (
					<audio src={dCPSopranAltBass} id="sopran-alt-bas-audio" controls />
				) : null}
				{alt && tenor && bas && !sopran ? (
					<audio src={dCPAltTenorBass} id="alt-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && bas ? (
					<audio src={dCPAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img1} className="notes" alt="Dzięki Ci Panie - nuty" />
			</div>
		</div>
	);
};

export default DziekiCiPanie;
