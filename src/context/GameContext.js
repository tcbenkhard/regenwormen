import React, {createContext, useState} from "react";
import {getFullDiceArray} from "../util/diceUtils";
import {getFullTilesArray} from "../util/tileUtils";

export const GameContext = createContext();

export const GameContextProvider = (props) => {

    const [players, setPlayers] = useState([
        {name: "Timo", stack: []},
        {name: "Manon", stack: []}
    ]);

    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    const [tiles, setTiles] = useState(getFullTilesArray());

    const [dice, setDice] = useState(getFullDiceArray());

    const [canRoll, setCanRoll] = useState(true);

    return (
        <GameContext.Provider value={{players, setPlayers, currentPlayerIndex, setCurrentPlayerIndex, tiles, setTiles, dice, setDice, canRoll, setCanRoll}}>
            {props.children}
        </GameContext.Provider>
    )
}