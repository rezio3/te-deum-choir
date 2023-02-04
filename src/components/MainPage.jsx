import React, { useState } from "react";
import "../style/css/MainPage.css";
import ChoosePieceWindow from "./ChoosePieceWindow";
import DziekiCiPanie from "./DziekiCiPanie";
import KrzyzuSwiety from "./KrzyzuSwiety";
import WitajPokarmie from "./WitajPokarmie";

const MainPage = () => {
	const [state, setState] = useState({
		chooseWindowOn: false,
		pieceNumber: 0,
		pieceName: 0,
	});

	const handleChooseBtn = () => {
		setState({
			...state,
			chooseWindowOn: true,
		});
	};
	return (
		<div className="main-container">
			<div className="select-piece-container">
				<h1 className="header-title">Ćwiczebnik - Te Deum</h1>
				<button className="choose-piece-btn" onClick={handleChooseBtn}>
					Wybierz utwór
				</button>
			</div>
			{state.chooseWindowOn ? (
				<ChoosePieceWindow state={state} setState={setState} />
			) : null}
			{state.pieceNumber === "1" ? (
				<DziekiCiPanie state={state} setState={setState} />
			) : null}
			{state.pieceNumber === "2" ? (
				<KrzyzuSwiety state={state} setState={setState} />
			) : null}
			{state.pieceNumber === "3" ? (
				<WitajPokarmie state={state} setState={setState} />
			) : null}
		</div>
	);
};

export default MainPage;
