import React, {useEffect, useState} from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import Favorite from "@components/Favorite";
import {useTheme, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL} from "@context/ThemeProvider";

import imgLight from './img/light.png'
import imgDark from './img/dark.png'
import imgNeutral from './img/neutral.png'

const Header = () => {
    const [icon, setIcon] = useState(imgLight);
    const isTheme = useTheme()

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(imgLight)
                break
            case THEME_DARK:
                setIcon(imgDark)
                break
            case THEME_NEUTRAL:
                setIcon(imgNeutral)
                break
            default:
                setIcon(imgNeutral)
        }
    }, [isTheme]);


    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="icon SW"/>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/not-found">Not Found</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/fail">Fail</NavLink></li>
            </ul>
            <Favorite/>
        </div>
    );
}

export default Header;
