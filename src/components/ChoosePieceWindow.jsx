import React from "react";
import "../style/css/Choose.css";

const ChoosePieceWindow = (props) => {
	const handlePieceBtn = (e) => {
		props.setState({
			...props.state,
			chooseWindowOn: false,
			pieceNumber: e.target.name,
			pieceName: e.target.title,
		});
	};
	return (
		<div className="choose-window">
			<button
				className="dzieki-Ci-Panie piece-button"
				title="Dzięki Ci Panie"
				name="1"
				onClick={handlePieceBtn}
			>
				Dzięki Ci Panie
			</button>
			<button
				className="krzyzu-swiety piece-button"
				title="Krzyżu Święty"
				name="2"
				onClick={handlePieceBtn}
			>
				Krzyżu Święty
			</button>
			<button
				className="witaj-pokarmie piece-button"
				title="Witaj Pokarmie"
				name="3"
				onClick={handlePieceBtn}
			>
				Witaj Pokarmie
			</button>
		</div>
	);
};

export default ChoosePieceWindow;
