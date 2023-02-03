import React, { useState } from "react";
import "../style/css/MainPage.css";
import ChoosePieceWindow from "./ChoosePieceWindow";
import DownContent1 from "./DownContent1";
import DownContent2 from "./DownContent2";

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
				<DownContent1 state={state} setState={setState} />
			) : null}
			{state.pieceNumber === "2" ? (
				<DownContent2 state={state} setState={setState} />
			) : null}
		</div>
	);
};

export default MainPage;
