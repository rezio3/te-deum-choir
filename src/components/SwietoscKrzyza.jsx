import React from "react";
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

const SwietoscKrzyza = () => {
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
					<audio src={ksSopran} id="sopran-audio" controls />
				) : null}
				{alt && !sopran && !tenor && !bas ? (
					<audio src={ksAlt} id="alt-audio" controls />
				) : null}
				{tenor && !sopran && !alt && !bas ? (
					<audio src={ksTenor} id="tenor-audio" controls />
				) : null}
				{bas && !sopran && !alt && !tenor ? (
					<audio src={ksBas} id="bas-audio" controls />
				) : null}
				{sopran && alt && !tenor && !bas ? (
					<audio src={ksSopranAlt} id="sopran-alt-audio" controls />
				) : null}
				{sopran && tenor && !alt && !bas ? (
					<audio src={ksSopranTenor} id="sopran-tenor-audio" controls />
				) : null}
				{sopran && bas && !alt && !tenor ? (
					<audio src={ksSopranBass} id="sopran-bas-audio" controls />
				) : null}
				{alt && tenor && !sopran && !bas ? (
					<audio src={ksAltTenor} id="alt-tenor-audio" controls />
				) : null}
				{alt && bas && !sopran && !tenor ? (
					<audio src={ksAltBass} id="alt-bas-audio" controls />
				) : null}
				{tenor && bas && !sopran && !alt ? (
					<audio src={ksTenorBass} id="tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && !bas ? (
					<audio src={ksSopranAltTenor} id="sopran-alt-tenor-audio" controls />
				) : null}
				{sopran && tenor && bas && !alt ? (
					<audio src={ksSopranTenorBass} id="sopran-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && bas && !tenor ? (
					<audio src={ksSopranAltBass} id="sopran-alt-bas-audio" controls />
				) : null}
				{alt && tenor && bas && !sopran ? (
					<audio src={ksAltTenorBass} id="alt-tenor-bas-audio" controls />
				) : null}
				{sopran && alt && tenor && bas ? (
					<audio src={ksAll} id="all-audio" controls />
				) : null}
			</div>
			<div className="notes-container">
				<img src={img2} className="notes" alt="Krzyżu Święty - nuty" />
			</div>
		</div>
	);
};

export default SwietoscKrzyza;
