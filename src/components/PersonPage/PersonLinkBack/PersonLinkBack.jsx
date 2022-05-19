import React from 'react';
import styles from './PersonLinkBack.module.css'
import {useNavigate} from "react-router-dom";
import iconBack from './img/go-back.svg'

const PersonLinkBack = () => {
    const navigate = useNavigate()
    const handleGoBack = e => {
        e.preventDefault()
        navigate(-1)
    }
    return (
        <a
            href="#"
            onClick={handleGoBack}
            className={styles.person__link}
        >
            <img className={styles.link__img} src={iconBack} alt="Go back"/>
            <span>Go Back</span>
        </a>
    );
}

export default PersonLinkBack;
