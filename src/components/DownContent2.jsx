import React, { useState } from "react";
import "../style/css/DownContent.css";
import ksSopran from "../audio/krzyzu-swiety/sopran.mp3";
import ksAlt from "../audio/krzyzu-swiety/alt.mp3";
import ksTenor from "../audio/krzyzu-swiety/tenor.mp3";
import ksBas from "../audio/krzyzu-swiety/bas.mp3";
import ksSopranAlt from "../audio/krzyzu-swiety/sopran-alt.mp3";
import ksSopranTenor from "../audio/krzyzu-swiety/sopran-tenor.mp3";
import ksSopranBass from "../audio/krzyzu-swiety/sopran-bas.mp3";
import ksAltTenor from "../audio/krzyzu-swiety/alt-tenor.mp3";
import ksAltBass from "../audio/krzyzu-swiety/alt-bas.mp3";
import ksTenorBass from "../audio/krzyzu-swiety/tenor-bas.mp3";
import ksSopranAltTenor from "../audio/krzyzu-swiety/sopran-alt-tenor.mp3";
import ksSopranTenorBass from "../audio/krzyzu-swiety/sopran-tenor-bas.mp3";
import ksSopranAltBass from "../audio/krzyzu-swiety/sopran-alt-bas.mp3";
import ksAltTenorBass from "../audio/krzyzu-swiety/alt-tenor-bas.mp3";
import ksAll from "../audio/krzyzu-swiety/all.mp3";
import img2 from "../img/krzyzu_swiety_nade_wszystko-1.jpg";

const DownContent2 = (props) => {
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
				<img src={img2} className="notes" />
			</div>
			<div className="audio-container">
				{sopran && !alt && !tenor && !bas && play ? (
					<audio src={ksSopran} id="sopran-audio" autoPlay />
				) : null}
				{alt && !sopran && !tenor && !bas && play ? (
					<audio src={ksAlt} id="alt-audio" autoPlay />
				) : null}
				{tenor && !sopran && !alt && !bas && play ? (
					<audio src={ksTenor} id="tenor-audio" autoPlay />
				) : null}
				{bas && !sopran && !alt && !tenor && play ? (
					<audio src={ksBas} id="bas-audio" autoPlay />
				) : null}
				{sopran && alt && !tenor && !bas && play ? (
					<audio src={ksSopranAlt} id="sopran-alt-audio" autoPlay />
				) : null}
				{sopran && tenor && !alt && !bas && play ? (
					<audio src={ksSopranTenor} id="sopran-tenor-audio" autoPlay />
				) : null}
				{sopran && bas && !alt && !tenor && play ? (
					<audio src={ksSopranBass} id="sopran-bas-audio" autoPlay />
				) : null}
				{alt && tenor && !sopran && !bas && play ? (
					<audio src={ksAltTenor} id="alt-tenor-audio" autoPlay />
				) : null}
				{alt && bas && !sopran && !tenor && play ? (
					<audio src={ksAltBass} id="alt-bas-audio" autoPlay />
				) : null}
				{tenor && bas && !sopran && !alt && play ? (
					<audio src={ksTenorBass} id="tenor-bas-audio" autoPlay />
				) : null}
				{sopran && alt && tenor && !bas && play ? (
					<audio src={ksSopranAltTenor} id="sopran-alt-tenor-audio" autoPlay />
				) : null}
				{sopran && tenor && bas && !alt && play ? (
					<audio src={ksSopranTenorBass} id="sopran-tenor-bas-audio" autoPlay />
				) : null}
				{sopran && alt && bas && !tenor && play ? (
					<audio src={ksSopranAltBass} id="sopran-alt-bas-audio" autoPlay />
				) : null}
				{alt && tenor && bas && !sopran && play ? (
					<audio src={ksAltTenorBass} id="alt-tenor-bas-audio" autoPlay />
				) : null}
				{sopran && alt && tenor && bas && play ? (
					<audio src={ksAll} id="all-audio" autoPlay />
				) : null}
			</div>
		</div>
	);
};

export default DownContent2;
