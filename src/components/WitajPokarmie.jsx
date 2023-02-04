import React from "react";
import img3 from "../img/witaj-pokarmie.jpg";
import "../style/css/DownContent.css";
import wpSopran from "../audio/witaj-pokarmie/sopran.mp3";
import wpAlt from "../audio/witaj-pokarmie/alt.mp3";
import wpTenor from "../audio/witaj-pokarmie/tenor.mp3";
import wpBas from "../audio/witaj-pokarmie/bas.mp3";
import wpSopranAlt from "../audio/witaj-pokarmie/sopran-alt.mp3";
import wpSopranTenor from "../audio/witaj-pokarmie/sopran-tenor.mp3";
import wpSopranBass from "../audio/witaj-pokarmie/sopran-bas.mp3";
import wpAltTenor from "../audio/witaj-pokarmie/alt-tenor.mp3";
import wpAltBass from "../audio/witaj-pokarmie/alt-bas.mp3";
import wpTenorBass from "../audio/witaj-pokarmie/tenor-bas.mp3";
import wpSopranAltTenor from "../audio/witaj-pokarmie/sopran-alt-tenor.mp3";
import wpSopranTenorBass from "../audio/witaj-pokarmie/sopran-tenor-bas.mp3";
import wpSopranAltBass from "../audio/witaj-pokarmie/sopran-alt-bas.mp3";
import wpAltTenorBass from "../audio/witaj-pokarmie/alt-tenor-bas.mp3";
import wpAll from "../audio/witaj-pokarmie/all.mp3";

const WitajPokarmie = () => {
	const [voice, setVoice] = useState({
		sopran: false,
		alt: false,
		tenor: false,
		bas: false,
		play: false,
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
				<img src={img3} className="notes" />
			</div>
			<div className="audio-container">
				{sopran && !alt && !tenor && !bas && play ? (
					<audio src={wpSopran} id="sopran-audio" autoPlay />
				) : null}
				{alt && !sopran && !tenor && !bas && play ? (
					<audio src={wpAlt} id="alt-audio" autoPlay />
				) : null}
				{tenor && !sopran && !alt && !bas && play ? (
					<audio src={wpTenor} id="tenor-audio" autoPlay />
				) : null}
				{bas && !sopran && !alt && !tenor && play ? (
					<audio src={wpBas} id="bas-audio" autoPlay />
				) : null}
				{sopran && alt && !tenor && !bas && play ? (
					<audio src={wpSopranAlt} id="sopran-alt-audio" autoPlay />
				) : null}
				{sopran && tenor && !alt && !bas && play ? (
					<audio src={wpSopranTenor} id="sopran-tenor-audio" autoPlay />
				) : null}
				{sopran && bas && !alt && !tenor && play ? (
					<audio src={wpSopranBass} id="sopran-bas-audio" autoPlay />
				) : null}
				{alt && tenor && !sopran && !bas && play ? (
					<audio src={wpAltTenor} id="alt-tenor-audio" autoPlay />
				) : null}
				{alt && bas && !sopran && !tenor && play ? (
					<audio src={wpAltBass} id="alt-bas-audio" autoPlay />
				) : null}
				{tenor && bas && !sopran && !alt && play ? (
					<audio src={wpTenorBass} id="tenor-bas-audio" autoPlay />
				) : null}
				{sopran && alt && tenor && !bas && play ? (
					<audio src={wpSopranAltTenor} id="sopran-alt-tenor-audio" autoPlay />
				) : null}
				{sopran && tenor && bas && !alt && play ? (
					<audio src={wpSopranTenorBass} id="sopran-tenor-bas-audio" autoPlay />
				) : null}
				{sopran && alt && bas && !tenor && play ? (
					<audio src={wpSopranAltBass} id="sopran-alt-bas-audio" autoPlay />
				) : null}
				{alt && tenor && bas && !sopran && play ? (
					<audio src={wpAltTenorBass} id="alt-tenor-bas-audio" autoPlay />
				) : null}
				{sopran && alt && tenor && bas && play ? (
					<audio src={wpAll} id="all-audio" autoPlay />
				) : null}
			</div>
		</div>
	);
};

export default WitajPokarmie;
