import React, {useContext} from "react";
import {GameContext} from "../context/GameContext";
import {getTotalPoints} from "../util/diceUtils";

const TileArea = () => {
    const {tiles, setTiles, players, currentPlayerIndex, setPlayers, dice} = useContext(GameContext);

    const handleTileClicked = (value) => {
        console.log(`Clicked on tile with value ${value}, should pass to player with index ${currentPlayerIndex} which is ${players[currentPlayerIndex].name}`);
        currentPlayerTakesTile(value);
    }

    const currentPlayerTakesTile = (value) => {
        const updatedPlayers = [...players];
        const tile = tiles.find(t => t.value === value);
        const updatedTiles = tiles.filter(t => t.value !== value);

        updatedPlayers[currentPlayerIndex].stack.push(tile);

        setPlayers(updatedPlayers);
        setTiles(updatedTiles);
    }

    const cannotBuyTile = (value) => {
        const points = getTotalPoints(dice);
        const tilesWithingBuyingRange = tiles.filter(tile => tile.value <= points);
        if(tilesWithingBuyingRange.length > 0) {
            const highestTile = tilesWithingBuyingRange[tilesWithingBuyingRange.length -1];
            const canBuyTile = highestTile.value === value

            console.log(`With ${points} points, the player can ${canBuyTile ? "" : "not"} buy the tile with value ${value}, the highest tile he can buy is ${highestTile.value}`);

            if(canBuyTile) return false;
        }

        return true;
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">Tiles</div>
                    <div className="card-body">
                        { tiles.map(tile => <button disabled={cannotBuyTile(tile.value)} onClick={() => handleTileClicked(tile.value)} className="btn btn-link"><div>{tile.value}</div><div>{tile.points}</div></button>) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TileArea;