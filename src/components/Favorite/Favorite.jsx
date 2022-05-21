import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import styles from './Favorite.module.css'
import icon from './img/favorite-white.svg'

const Favorite = () => {
    const [count, setCount] = useState();
    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        // console.log(Object.keys(storeData))
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length)
    });


    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="favorites"/>
            </Link>

        </div>
    );
}

export default Favorite;
