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
      <button
        className="radujmy-sie piece-button"
        title="Radujmy się"
        name="4"
        onClick={handlePieceBtn}
      >
        Radujmy się
      </button>
      <button
        className="swietosc-krzyza piece-button"
        title="Świętość Krzyża"
        name="5"
        onClick={handlePieceBtn}
      >
        Świętość Krzyża
      </button>
      <button
        className="zawitaj-ukrzyzowany piece-button"
        title="Zawitaj Ukrzyżowany"
        name="6"
        onClick={handlePieceBtn}
      >
        Zawitaj Ukrzyżowany
      </button>
      <button
        className="alleluja piece-button"
        title="Alleluja Jamneńskie"
        name="7"
        onClick={handlePieceBtn}
      >
        Alleluja Jamneńskie
      </button>
      <button
        className="przychodzisz-panie piece-button"
        title="Przychodzisz Panie"
        name="8"
        onClick={handlePieceBtn}
      >
        Przychodzisz Panie
      </button>
      <button
        className="ukaz-mi-panie piece-button"
        title="Ukaż mi Panie"
        name="9"
        onClick={handlePieceBtn}
      >
        Ukaż mi Panie
      </button>
      <button
        className="o-krwi-i-wodo piece-button"
        title="O krwi i wodo"
        name="10"
        onClick={handlePieceBtn}
      >
        O krwi i wodo
      </button>
      <button
        className="o-salutaris piece-button"
        title="O Salutaris"
        name="11"
        onClick={handlePieceBtn}
      >
        O Salutaris
      </button>
      <button
        className="glos-imie-pana piece-button"
        title="Głoś imię Pana"
        name="12"
        onClick={handlePieceBtn}
      >
        Głoś imię Pana
      </button>
    </div>
  );
};

export default ChoosePieceWindow;
