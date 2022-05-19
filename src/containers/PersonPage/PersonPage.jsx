import React, {useEffect, useState, Suspense} from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";

import {withErrorApi} from "@hoc-helpers/withErrorApi";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import UiLoading from "@ui/UiLoading/UiLoading";
import {getPeopleImage} from "@services/getPeopleData";
import {getApiResource} from "@utils/network";
import {API_PERSON} from "@constants/api";

import styles from './PersonPage.module.css'

// import PersonFilms from "@components/PersonPage/PersonFilms";
const PersonFilms = React.lazy(() => import("@components/PersonPage/PersonFilms"))

const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);

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
                // console.log(res.films)
                res.films.length && setPersonFilms(res.films)

                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))
            }
            setErrorApi(!res)
        })()
    }, []);

    return (
        <>
            <PersonLinkBack/>
            <UiLoading
                theme="white"
                isShadow
            />
        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>

            <div className={styles.container}>
                <PersonPhoto personName={personName} personPhoto={personPhoto}/>

                {personInfo && <PersonInfo personInfo={personInfo}/>}
                {personFilms && (
                    <Suspense fallback={<h1>{<UiLoading/>}</h1>}>
                        <PersonFilms personFilms={personFilms}/>
                    </Suspense>
                )}
            </div>
        </div>
        </>
    );
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
