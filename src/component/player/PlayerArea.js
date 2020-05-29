import React, {useContext} from "react";
import {GameContext} from "../../context/GameContext";
import PlayerDetail from "./PlayerDetails";

export default () => {
    const {players} = useContext(GameContext);
    let playerDetails = players.map(player => <PlayerDetail player={player}/>);

    return (
        <div>
            <div className="row">
                {playerDetails}
            </div>
        </div>
    )
}