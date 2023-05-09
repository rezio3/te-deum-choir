import React, { useState } from "react";
import "../style/css/DownContent.css";
import umPSopran from "../audio/ukaz-mi-panie/sopran.mp3";
import umPAlt from "../audio/ukaz-mi-panie/alt.mp3";
import umPTenor from "../audio/ukaz-mi-panie/tenor.mp3";
import umPBas from "../audio/ukaz-mi-panie/bas.mp3";
import umPSopranAlt from "../audio/ukaz-mi-panie/sopran-alt.mp3";
import umPSopranTenor from "../audio/ukaz-mi-panie/sopran-tenor.mp3";
import umPSopranBass from "../audio/ukaz-mi-panie/sopran-bas.mp3";
import umPAltTenor from "../audio/ukaz-mi-panie/alt-tenor.mp3";
import umPAltBass from "../audio/ukaz-mi-panie/alt-bas.mp3";
import umPTenorBass from "../audio/ukaz-mi-panie/tenor-bas.mp3";
import umPSopranAltTenor from "../audio/ukaz-mi-panie/sopran-alt-tenor.mp3";
import umPSopranTenorBass from "../audio/ukaz-mi-panie/sopran-tenor-bas.mp3";
import umPSopranAltBass from "../audio/ukaz-mi-panie/sopran-alt-bas.mp3";
import umPAltTenorBass from "../audio/ukaz-mi-panie/alt-tenor-bas.mp3";
import umPAll from "../audio/ukaz-mi-panie/all.mp3";
import img from "../img/ukaz-mi-panie.jpg";

const UkazMiPanie = (props) => {
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
					<audio src={umPSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor && !bas ? (
					<audio src={umPAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt && !bas ? (
					<audio src={umPTenor} id="tenor-audio" controls />
				) : null}
				{bas && !sopran && !alt && !tenor ? (
					<audio src={umPBas} id="bas-audio" controls />
				) : null}
				{sopran && alt && !tenor && !bas ? (
					<audio src={umPSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt && !bas ? (
					<audio src={umPSopranTenor} id="sopran-tenor-audio" controls />
				) : null}
				{sopran && bas && !alt && !tenor ? (
					<audio src={umPSopranBass} id="sopran-bas-audio" controls />
				) : null}
				{alt && tenor && !sopran && !bas ? (
					<audio src={umPAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{alt && bas && !sopran && !tenor ? (
					<audio src={umPAltBass} id="alt-bas-audio" controls />
				) : null}
				{tenor && bas && !sopran && !alt ? (
					<audio src={umPTenorBass} id="tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && !bas ? (
					<audio src={umPSopranAltTenor} id="sopran-alt-tenor-audio" controls />
				) : null}
				{sopran && tenor && bas && !alt ? (
					<audio
						src={umPSopranTenorBass}
						id="sopran-tenor-bas-audio"
						controls
					/>
				) : null}
				{sopran && alt && bas && !tenor ? (
					<audio src={umPSopranAltBass} id="sopran-alt-bas-audio" controls />
				) : null}
				{alt && tenor && bas && !sopran ? (
					<audio src={umPAltTenorBass} id="alt-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && bas ? (
					<audio src={umPAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img} className="notes" alt="Ukaż mi Panie - nuty" />
			</div>
		</div>
	);
};

export default UkazMiPanie;
