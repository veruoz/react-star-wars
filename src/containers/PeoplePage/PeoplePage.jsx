import React, {useEffect, useState} from 'react';
import {API_PEOPLE} from "@constants/api";
import {getApiResource} from "@utils/network";
import {getPeopleId, getPeopleImage} from "@services/getPeopleData";
import PeopleList from "@components/PeoplePage/PeopleList";
import {withErrorApi} from "@hoc-helpers/withErrorApi";

import styles from './PeoplePage.module.css'

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);

    const gerResource = async (url) => {
        const res = await getApiResource(url)

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }


    }
    useEffect(() => {
        return () => {
            gerResource(API_PEOPLE)
        };
    }, []);

    return (
        <>
            <h1>Navigation</h1>
            {people && <PeopleList people={people}/>}
        </>
    );
}

export default withErrorApi(PeoplePage);
