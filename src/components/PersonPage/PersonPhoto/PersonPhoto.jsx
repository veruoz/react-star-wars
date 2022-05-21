import React from 'react';
import PropTypes from "prop-types";

import styles from './PersonPhoto.module.css'
import {useDispatch} from "react-redux";
import {removePersonFromFavorite, setPersonToFavorite} from "@store/actions";

import iconFavoriteWhite from './img/favorite-white.svg'
import iconFavoriteYellow from './img/favorite-yellow.svg'

// const state = {
//     1: {
//         name: '',
//         img:  ''
//     }
// }

const PersonPhoto = ({ personPhoto, personName, personId, personFavorite, setPersonFavorite }) => {
    const dispatch = useDispatch()

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img:  personPhoto
                }
            }))
            setPersonFavorite(true)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName}/>

            <img
                src={personFavorite ? iconFavoriteYellow : iconFavoriteWhite}
                alt="Add to favorite"
                title="Add to favorite"
                onClick={dispatchFavoritePeople}
                className={styles.favorite}
            />

            {/*<button onClick={dispatchFavoritePeople}>*/}
            {/*    {personFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}*/}
            {/*</button>*/}
            </div>

        </>
    );
}

PersonPhoto.propTypes = {
    personPhoto:       PropTypes.string,
    personName:        PropTypes.string,
    personId:          PropTypes.string,
    personFavorite:    PropTypes.bool,
    setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
