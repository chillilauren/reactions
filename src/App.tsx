import React, {FunctionComponent}, from 'react';
import React, {useState}, from 'react';
import {Game} from "./Game/Game";
import styles from "./App.module.scss";

export const App: FunctionComponent = () => {
    // Adding state to activeButtonId
    const [activeButtonId, setActiveButtonId] = useState(0);

    return (
        <main className={styles.main}>
            <Game/>
        </main>
    );
};

