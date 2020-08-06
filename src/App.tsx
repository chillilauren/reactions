import React ,{FunctionComponent, useState} from 'react';
import {Game} from "./Game/Game";
import styles from "./App.module.scss";
import { Board } from './Game/Board/Board';


export const App: FunctionComponent = () => {
    // Add state to game score
    const [gameScore, setGameScore] = useState(0);

    if(gameScore < 5) {
        return (
            <main className={styles.main}>
                <Game gameScore={gameScore} setGameScore={setGameScore}/>
            </main>
        );
    }
    return (
    <main className={styles.main}>
        <h1>Game over!</h1>
        <button onClick={ () => setGameScore(0)}>Start again</button>
    </main>
    );
    
};
