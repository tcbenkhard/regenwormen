import React, {useContext} from "react";
import './DiceArea.css';
import {GameContext} from "../context/GameContext";
import {getTotalPoints} from "../util/diceUtils";

const DiceArea = (props) => {
    const {dice, setDice, canRoll, setCanRoll} = useContext(GameContext);

    const rollDice = () => {
        console.log('Rolling dice');
        let rolledDice = [...dice];
        rolledDice.forEach(d => {
            if(d.picked === false)
                d.value = Math.ceil(Math.random() * 6);
        });
        setDice(rolledDice);
        setCanRoll(false);
    }

    const disableRollButton = () => {
        return !canRoll;
    }

    const pickDice = (diceValue) => {
        let updatedDice = [...dice];
        updatedDice.forEach(d => {
            if (d.value === diceValue) d.picked = true
        });

        setDice(updatedDice);
    }

    const handleDiceClicked = (diceValue) => {
        console.log(`Clicked dice with value ${diceValue}`);
        if(diceHasNotBeenPicked(diceValue)) {
            pickDice(diceValue);
            setCanRoll(true);
        } else {
            console.log(`Dice with value ${diceValue} has already been picked!`);
        }
    }

    const diceHasNotBeenPicked = (diceValue) => {
        return dice.filter(d => d.value === diceValue && d.picked === true).length === 0
    }

    console.log("Rendering dice", dice);
    return (
        <div id="dicearea">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Dice <button className="btn btn-primary btn-sm float-right" onClick={rollDice} disabled={disableRollButton()}>Roll dice!</button></div>
                        <div className="card-body">
                            <div></div>
                            {
                                dice
                                    .filter(d => d.picked === false)
                                    .map(d =>
                                        <button className="dice btn-lg btn btn-primary" disabled={canRoll} onClick={() => handleDiceClicked(d.value)}>{d.value}</button>
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">Selected <span className="float-right">Total points: {getTotalPoints(dice)}</span></div>

                        <div className="card-body">
                            {
                                dice
                                    .filter(d => d.picked === true)
                                    .sort((a, b) => {
                                        if(a.value < b.value) return -1;
                                        if(a.value > b.value) return 1;
                                        return 0;
                                    })
                                    .map(d =>
                                        <button disabled className="dice btn btn-link">{d.value}</button>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiceArea;