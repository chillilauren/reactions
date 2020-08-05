import React, {FunctionComponent} from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    id: number;
    x: number;
    y: number;
    activeButtonId: number;
}

// Button component
export const Button: FunctionComponent<ButtonProps> = ({id, x, y, activeButtonId}) => {
    // Workout if button is already active
    const isActive = id === activeButtonId;

    // function to change class to active
    const getClass = (): string => {
        if (isActive) {
            return ${styles.button} ${styles.active}
        }
        return styles.button
    }

    return (
        <circle className={getClass()} cx={x} cy={y} r={100}/>
    );
};