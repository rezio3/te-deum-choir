import React, { useState } from "react";
import "../style/css/DownContent.css";
import pPSopran from "../audio/przychodzisz-panie/sopran.mp3";
import pPAlt from "../audio/przychodzisz-panie/alt.mp3";
import pPTenor from "../audio/przychodzisz-panie/tenor.mp3";
import pPBas from "../audio/przychodzisz-panie/bas.mp3";
import pPSopranAlt from "../audio/przychodzisz-panie/sopran-alt.mp3";
import pPSopranTenor from "../audio/przychodzisz-panie/sopran-tenor.mp3";
import pPSopranBass from "../audio/przychodzisz-panie/sopran-bas.mp3";
import pPAltTenor from "../audio/przychodzisz-panie/alt-tenor.mp3";
import pPAltBass from "../audio/przychodzisz-panie/alt-bas.mp3";
import pPTenorBass from "../audio/przychodzisz-panie/tenor-bas.mp3";
import pPSopranAltTenor from "../audio/przychodzisz-panie/sopran-alt-tenor.mp3";
import pPSopranTenorBass from "../audio/przychodzisz-panie/sopran-tenor-bas.mp3";
import pPSopranAltBass from "../audio/przychodzisz-panie/sopran-alt-bas.mp3";
import pPAltTenorBass from "../audio/przychodzisz-panie/alt-tenor-bas.mp3";
import pPAll from "../audio/przychodzisz-panie/all.mp3";
import img2 from "../img/krzyzu_swiety_nade_wszystko-1.jpg";

const PrzychodziszPanie = (props) => {
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
					<audio src={pPSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor && !bas ? (
					<audio src={pPAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt && !bas ? (
					<audio src={pPTenor} id="tenor-audio" controls />
				) : null}
				{bas && !sopran && !alt && !tenor ? (
					<audio src={pPBas} id="bas-audio" controls />
				) : null}
				{sopran && alt && !tenor && !bas ? (
					<audio src={pPSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt && !bas ? (
					<audio src={pPSopranTenor} id="sopran-tenor-audio" controls />
				) : null}
				{sopran && bas && !alt && !tenor ? (
					<audio src={pPSopranBass} id="sopran-bas-audio" controls />
				) : null}
				{alt && tenor && !sopran && !bas ? (
					<audio src={pPAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{alt && bas && !sopran && !tenor ? (
					<audio src={pPAltBass} id="alt-bas-audio" controls />
				) : null}
				{tenor && bas && !sopran && !alt ? (
					<audio src={pPTenorBass} id="tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && !bas ? (
					<audio src={pPSopranAltTenor} id="sopran-alt-tenor-audio" controls />
				) : null}
				{sopran && tenor && bas && !alt ? (
					<audio src={pPSopranTenorBass} id="sopran-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && bas && !tenor ? (
					<audio src={pPSopranAltBass} id="sopran-alt-bas-audio" controls />
				) : null}
				{alt && tenor && bas && !sopran ? (
					<audio src={pPAltTenorBass} id="alt-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && bas ? (
					<audio src={pPAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img2} className="notes" alt="Przychodzisz Panie - nuty" />
			</div>
		</div>
	);
};

export default PrzychodziszPanie;
