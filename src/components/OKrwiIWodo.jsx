import React, { useState } from "react";
import "../style/css/DownContent.css";
import okiwSopran from "../audio/o-krwi-i-wodo/sopran.mp3";
import okiwAlt from "../audio/o-krwi-i-wodo/alt.mp3";
import okiwTenor from "../audio/o-krwi-i-wodo/tenor.mp3";
import okiwBas from "../audio/o-krwi-i-wodo/bas.mp3";
import okiwSopranAlt from "../audio/o-krwi-i-wodo/sopran-alt.mp3";
import okiwSopranTenor from "../audio/o-krwi-i-wodo/sopran-tenor.mp3";
import okiwSopranBass from "../audio/o-krwi-i-wodo/sopran-bas.mp3";
import okiwAltTenor from "../audio/o-krwi-i-wodo/alt-tenor.mp3";
import okiwAltBass from "../audio/o-krwi-i-wodo/alt-bas.mp3";
import okiwTenorBass from "../audio/o-krwi-i-wodo/tenor-bas.mp3";
import okiwSopranAltTenor from "../audio/o-krwi-i-wodo/sopran-alt-tenor.mp3";
import okiwSopranTenorBass from "../audio/o-krwi-i-wodo/sopran-tenor-bas.mp3";
import okiwSopranAltBass from "../audio/o-krwi-i-wodo/sopran-alt-bas.mp3";
import okiwAltTenorBass from "../audio/o-krwi-i-wodo/alt-tenor-bas.mp3";
import okiwAll from "../audio/o-krwi-i-wodo/all.mp3";
import img from "../img/o-krwi-i-wodo.jpg";

const OKrwiIWodo = (props) => {
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
					<audio src={okiwSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor && !bas ? (
					<audio src={okiwAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt && !bas ? (
					<audio src={okiwTenor} id="tenor-audio" controls />
				) : null}
				{bas && !sopran && !alt && !tenor ? (
					<audio src={okiwBas} id="bas-audio" controls />
				) : null}
				{sopran && alt && !tenor && !bas ? (
					<audio src={okiwSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt && !bas ? (
					<audio src={okiwSopranTenor} id="sopran-tenor-audio" controls />
				) : null}
				{sopran && bas && !alt && !tenor ? (
					<audio src={okiwSopranBass} id="sopran-bas-audio" controls />
				) : null}
				{alt && tenor && !sopran && !bas ? (
					<audio src={okiwAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{alt && bas && !sopran && !tenor ? (
					<audio src={okiwAltBass} id="alt-bas-audio" controls />
				) : null}
				{tenor && bas && !sopran && !alt ? (
					<audio src={okiwTenorBass} id="tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && !bas ? (
					<audio
						src={okiwSopranAltTenor}
						id="sopran-alt-tenor-audio"
						controls
					/>
				) : null}
				{sopran && tenor && bas && !alt ? (
					<audio
						src={okiwSopranTenorBass}
						id="sopran-tenor-bas-audio"
						controls
					/>
				) : null}
				{sopran && alt && bas && !tenor ? (
					<audio src={okiwSopranAltBass} id="sopran-alt-bas-audio" controls />
				) : null}
				{alt && tenor && bas && !sopran ? (
					<audio src={okiwAltTenorBass} id="alt-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && bas ? (
					<audio src={okiwAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img} className="notes" alt="O krwi i wodo - nuty" />
			</div>
		</div>
	);
};

export default OKrwiIWodo;
