import React from "react";
import './Game.css';
import PlayerArea from "./player/PlayerArea";
import TileArea from "./TileArea";
import DiceArea from "./DiceArea";

const Game = () => {
    return (
        <div id="game">
            <PlayerArea />
            <TileArea />
            <DiceArea />
        </div>
    );
}

export default Game;
