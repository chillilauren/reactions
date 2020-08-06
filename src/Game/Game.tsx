import React, {FunctionComponent, useState} from "react";
import styles from "./Game.module.scss";
import {Board} from "./Board/Board";

interface GameProps {
    gameScore: number;
    setGameScore: (newGameScore: number) => void;
}

export const Game: FunctionComponent<GameProps> = ({gameScore, setGameScore}) => {

    return (
        <section className={styles.content}>
            <h2 className="score">SCORE: {gameScore}</h2>
            <Board gameScore={gameScore} setGameScore={setGameScore}/>
        </section>
    );
};
