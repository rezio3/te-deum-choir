import React, { useState } from "react";
import img6 from "../img/zawitaj-ukrzyzowany.jpg";
import "../style/css/DownContent.css";
import zuSopran from "../audio/zawitaj-ukrzyzowany/sopran.mp3";
import zuAlt from "../audio/zawitaj-ukrzyzowany/alt.mp3";
import zuTenor from "../audio/zawitaj-ukrzyzowany/tenor.mp3";
import zuBas from "../audio/zawitaj-ukrzyzowany/bas.mp3";
import zuSopranAlt from "../audio/zawitaj-ukrzyzowany/sopran-alt.mp3";
import zuSopranTenor from "../audio/zawitaj-ukrzyzowany/sopran-tenor.mp3";
import zuSopranBass from "../audio/zawitaj-ukrzyzowany/sopran-bas.mp3";
import zuAltTenor from "../audio/zawitaj-ukrzyzowany/alt-tenor.mp3";
import zuAltBass from "../audio/zawitaj-ukrzyzowany/alt-bas.mp3";
import zuTenorBass from "../audio/zawitaj-ukrzyzowany/tenor-bas.mp3";
import zuSopranAltTenor from "../audio/zawitaj-ukrzyzowany/sopran-alt-tenor.mp3";
import zuSopranTenorBass from "../audio/zawitaj-ukrzyzowany/sopran-tenor-bas.mp3";
import zuSopranAltBass from "../audio/zawitaj-ukrzyzowany/sopran-alt-bas.mp3";
import zuAltTenorBass from "../audio/zawitaj-ukrzyzowany/alt-tenor-bas.mp3";
import zuAll from "../audio/zawitaj-ukrzyzowany/all.mp3";

const ZawitajUkrzyzowany = (props) => {
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
					<audio src={wpSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor && !bas ? (
					<audio src={wpAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt && !bas ? (
					<audio src={wpTenor} id="tenor-audio" controls />
				) : null}
				{bas && !sopran && !alt && !tenor ? (
					<audio src={wpBas} id="bas-audio" controls />
				) : null}
				{sopran && alt && !tenor && !bas ? (
					<audio src={wpSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt && !bas ? (
					<audio src={wpSopranTenor} id="sopran-tenor-audio" controls />
				) : null}
				{sopran && bas && !alt && !tenor ? (
					<audio src={wpSopranBass} id="sopran-bas-audio" controls />
				) : null}
				{alt && tenor && !sopran && !bas ? (
					<audio src={wpAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{alt && bas && !sopran && !tenor ? (
					<audio src={wpAltBass} id="alt-bas-audio" controls />
				) : null}
				{tenor && bas && !sopran && !alt ? (
					<audio src={wpTenorBass} id="tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && !bas ? (
					<audio src={wpSopranAltTenor} id="sopran-alt-tenor-audio" controls />
				) : null}
				{sopran && tenor && bas && !alt ? (
					<audio src={wpSopranTenorBass} id="sopran-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && bas && !tenor ? (
					<audio src={wpSopranAltBass} id="sopran-alt-bas-audio" controls />
				) : null}
				{alt && tenor && bas && !sopran ? (
					<audio src={wpAltTenorBass} id="alt-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && bas ? (
					<audio src={wpAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img3} className="notes" alt="Witaj Pokarmie - nuty" />
			</div>
		</div>
	);
};

export default ZawitajUkrzyzowany;
