import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import styles from './FavoritePage.module.css'
import PeopleList from "../../components/PeoplePage/PeopleList";

const FavoritePage = () => {
    const [people, setPeople] = useState([]);
    const storeDate = useSelector(state => state.favoriteReducer)
    // console.log(storeDate)

    useEffect(() => {
        const arr = Object.entries(storeDate)
        // console.log(arr)
        if (arr.length) {
            // преобразуем в формат {id, name, img}
            const res = arr.map(item => {
                return {
                    id: item[0],
                    // name: item[1].name,
                    // img: item[1].img,
                    // либо так:
                    ...item[1]
                }
            })
            // console.log('res', res)
            setPeople(res)
        }
    }, []);


    return (
        <>
            <h1 className="header__text">Favorites</h1>
            {people.length
             ? <PeopleList people={people}/>
             : <h2 className={styles.comment}>No data</h2>
            }

        </>
    );
}

export default FavoritePage;
