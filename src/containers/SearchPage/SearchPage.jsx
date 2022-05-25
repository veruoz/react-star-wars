import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {debounce} from "lodash";

import {getApiResource} from "@utils/network";
import {API_SEARCH} from "@constants/api";
import {withErrorApi} from "@hoc-helpers/withErrorApi";
import {getPeopleId, getPeopleImage} from "@services/getPeopleData";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo";

import styles from './SearchPage.module.css'
import UiInput from "../../components/UI/UiInput";

const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = async param => {
        // проверка работы debounce
        // console.log(param)
        const res = await getApiResource(API_SEARCH + param)
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
            // console.log('res', res)
            // console.log('peopleList', peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }
// подгружаем персонажи по умолчанию, если в параметре search пусто - выводятся первые 10
    useEffect(() => {
        getResponse('')
    }, []);
// Задержка выполнения запросов ladash debounce(func, delay) совместно с useCallback(callback func, dependencies)
    const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );


    const handleInputChange = (value) => {
        // const value = event.target.value
        setInputSearchValue(value)
        debounceGetResponse(value)
        // getResponse(value)
    }
    return (
        <>
            <h1 className="header__text">Search</h1>
            {/*Управляемый компонент*/}
            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input character's name"
                classes={styles.input__search}
            />

            <SearchPageInfo people={people}/>
        </>
    );
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
