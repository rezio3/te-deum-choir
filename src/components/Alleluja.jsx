import React, { useState } from "react";
import "../style/css/DownContent.css";
import aSopran from "../audio/alleluja/sopran.mp3";
import aAlt from "../audio/alleluja/alt.mp3";
import aTenor from "../audio/alleluja/tenor.mp3";
import aBas from "../audio/alleluja/bas.mp3";
import aSopranAlt from "../audio/alleluja/sopran-alt.mp3";
import aSopranTenor from "../audio/alleluja/sopran-tenor.mp3";
import aSopranBass from "../audio/alleluja/sopran-bas.mp3";
import aAltTenor from "../audio/alleluja/alt-tenor.mp3";
import aAltBass from "../audio/alleluja/alt-bas.mp3";
import aTenorBass from "../audio/alleluja/tenor-bas.mp3";
import aSopranAltTenor from "../audio/alleluja/sopran-alt-tenor.mp3";
import aSopranTenorBass from "../audio/alleluja/sopran-tenor-bas.mp3";
import aSopranAltBass from "../audio/alleluja/sopran-alt-bas.mp3";
import aAltTenorBass from "../audio/alleluja/alt-tenor-bas.mp3";
import aAll from "../audio/alleluja/all.mp3";
import img7 from "../img/krzyzu_swiety_nade_wszystko-1.jpg";

const Alleluja = (props) => {
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
					<audio src={aSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor && !bas ? (
					<audio src={aAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt && !bas ? (
					<audio src={aTenor} id="tenor-audio" controls />
				) : null}
				{bas && !sopran && !alt && !tenor ? (
					<audio src={aBas} id="bas-audio" controls />
				) : null}
				{sopran && alt && !tenor && !bas ? (
					<audio src={aSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt && !bas ? (
					<audio src={aSopranTenor} id="sopran-tenor-audio" controls />
				) : null}
				{sopran && bas && !alt && !tenor ? (
					<audio src={aSopranBass} id="sopran-bas-audio" controls />
				) : null}
				{alt && tenor && !sopran && !bas ? (
					<audio src={aAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{alt && bas && !sopran && !tenor ? (
					<audio src={aAltBass} id="alt-bas-audio" controls />
				) : null}
				{tenor && bas && !sopran && !alt ? (
					<audio src={aTenorBass} id="tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && !bas ? (
					<audio src={aSopranAltTenor} id="sopran-alt-tenor-audio" controls />
				) : null}
				{sopran && tenor && bas && !alt ? (
					<audio src={aSopranTenorBass} id="sopran-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && bas && !tenor ? (
					<audio src={aSopranAltBass} id="sopran-alt-bas-audio" controls />
				) : null}
				{alt && tenor && bas && !sopran ? (
					<audio src={aAltTenorBass} id="alt-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && bas ? (
					<audio src={aAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img2} className="notes" alt="Krzyżu Święty - nuty" />
			</div>
		</div>
	);
};

export default Alleluja;
