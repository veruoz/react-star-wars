import {Route, Routes} from "react-router-dom";
import cn from 'classnames'

import routesConfig from "@routes/routesConfig";
import Header from "@components/Header";

import styles from './App.module.css';

function App() {
    return (
        <div className={styles.wrapper}>
            {/*<h1 className={cn(styles.header, styles.text)}>Hi</h1>*/}
            {/*<h1 className={styles.header}>Hi</h1>*/}
            <Header/>

            <Routes>
                {/*<Route path="/" element={<HomePage />}/>*/}
                {/*<Route path="/people" element={<PeoplePage/>}/>*/}
                {routesConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>

        </div>
    );
}

export default App;
