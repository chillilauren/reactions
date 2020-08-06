import React, {FunctionComponent} from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
    setActiveButtonId: (id: number) => void;
    gameScore: number;
    setGameScore: (newGameScore: number) => void;

}

// Button component
export const Button: FunctionComponent<ButtonProps> = ({id, x, y, activeButtonId, setActiveButtonId, gameScore, setGameScore}) => {
    // Workout if button is already active
    const isActive = id === activeButtonId;

    // Function to call setActiveButtonId
    const changeButton = () => {
        if (isActive) {
            // Selects random button ID
            const getRandomButtonId = Math.floor(Math.random() * 8);

            // Makes random button active
            setActiveButtonId(getRandomButtonId);

            // Adds one to gameScore
            setGameScore(gameScore + 1);
        }

    }

    // function to change class to active
    const getClass = (): string => {
        if (isActive) {
            return `${styles.button} ${styles.active}`
        }
        return styles.button
    }

    return (
        <circle onClick={changeButton} className={getClass()} cx={x} cy={y} r={100}/>
    );
};