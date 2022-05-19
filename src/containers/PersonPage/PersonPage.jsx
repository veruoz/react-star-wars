import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";

import {withErrorApi} from "@hoc-helpers/withErrorApi";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import {getPeopleImage} from "@services/getPeopleData";
import {getApiResource} from "@utils/network";
import {API_PERSON} from "@constants/api";

import styles from './PersonPage.module.css'

const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`)
            // console.log(`${API_PERSON}/${id}/`, res)
            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair color', data: res.hair_color },
                    { title: 'Skin color', data: res.skin_color },
                    { title: 'Eye color', data: res.eye_color },
                    { title: 'Birth year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ])

                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))
            }
            setErrorApi(!res)
        })()
    }, []);

    return (
        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>

            <div className={styles.container}>
                <PersonPhoto personName={personName} personPhoto={personPhoto}/>

                {personInfo && <PersonInfo personInfo={personInfo}/>}
            </div>
        </div>
    );
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
