import React, { useState } from "react";
import "../style/css/DownContent.css";
import skSopran from "../audio/swietosc-krzyza/sopran.mp3";
import skAlt from "../audio/swietosc-krzyza/alt.mp3";
import skTenor from "../audio/swietosc-krzyza/tenor.mp3";
import skBas from "../audio/swietosc-krzyza/bas.mp3";
import skSopranAlt from "../audio/swietosc-krzyza/sopran-alt.mp3";
import skSopranTenor from "../audio/swietosc-krzyza/sopran-tenor.mp3";
import skSopranBass from "../audio/swietosc-krzyza/sopran-bas.mp3";
import skAltTenor from "../audio/swietosc-krzyza/alt-tenor.mp3";
import skAltBass from "../audio/swietosc-krzyza/alt-bas.mp3";
import skTenorBass from "../audio/swietosc-krzyza/tenor-bas.mp3";
import skSopranAltTenor from "../audio/swietosc-krzyza/sopran-alt-tenor.mp3";
import skSopranTenorBass from "../audio/swietosc-krzyza/sopran-tenor-bas.mp3";
import skSopranAltBass from "../audio/swietosc-krzyza/sopran-alt-bas.mp3";
import skAltTenorBass from "../audio/swietosc-krzyza/alt-tenor-bas.mp3";
import skAll from "../audio/swietosc-krzyza/all.mp3";
import img5 from "../img/swietosc-krzyza.jpg";

const SwietoscKrzyza = (props) => {
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
					<audio src={skSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor && !bas ? (
					<audio src={skAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt && !bas ? (
					<audio src={skTenor} id="tenor-audio" controls />
				) : null}
				{bas && !sopran && !alt && !tenor ? (
					<audio src={skBas} id="bas-audio" controls />
				) : null}
				{sopran && alt && !tenor && !bas ? (
					<audio src={skSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt && !bas ? (
					<audio src={skSopranTenor} id="sopran-tenor-audio" controls />
				) : null}
				{sopran && bas && !alt && !tenor ? (
					<audio src={skSopranBass} id="sopran-bas-audio" controls />
				) : null}
				{alt && tenor && !sopran && !bas ? (
					<audio src={skAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{alt && bas && !sopran && !tenor ? (
					<audio src={skAltBass} id="alt-bas-audio" controls />
				) : null}
				{tenor && bas && !sopran && !alt ? (
					<audio src={skTenorBass} id="tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && !bas ? (
					<audio src={skSopranAltTenor} id="sopran-alt-tenor-audio" controls />
				) : null}
				{sopran && tenor && bas && !alt ? (
					<audio src={skSopranTenorBass} id="sopran-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && bas && !tenor ? (
					<audio src={skSopranAltBass} id="sopran-alt-bas-audio" controls />
				) : null}
				{alt && tenor && bas && !sopran ? (
					<audio src={skAltTenorBass} id="alt-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && bas ? (
					<audio src={skAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img5} className="notes" alt="Krzyżu Święty - nuty" />
			</div>
		</div>
	);
};

export default SwietoscKrzyza;
