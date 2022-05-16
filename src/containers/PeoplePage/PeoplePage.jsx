import React, {useEffect, useState} from 'react';
import styles from './PeoplePage.module.css'
import {API_PEOPLE} from "../../constants/api";
import {getApiResource} from "../../utils/network";
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";

const PeoplePage = () => {
    const [people, setPeople] = useState(null);
    const [errorApi, seterrorApi] = useState(false);

    const gerResource = async (url) => {
        const res = await getApiResource(url)

        if(res){
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

        }


    }
    useEffect(() => {
        return () => {
            gerResource(API_PEOPLE)
        };
    }, []);

    return (
        <>
            {people && (
                <PeopleList people={people}/>
            )}

        </>
    );
}

export default PeoplePage;
