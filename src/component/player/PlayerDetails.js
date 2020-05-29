import React from "react";

const PlayerDetail = (props) => {
    console.log("Rendering player with ", props.player.name);
    return (
        <div className="col-3">
            <div className="card 6">
                <div className="card-header">{props.player.name}</div>
                <div className="card-body">
                    <p className="card-text">This will hold the player stats</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetail;