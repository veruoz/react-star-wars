import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames'

import icon from './img/cancel.svg'

import styles from './UiInput.module.css'
import '../index.css'

const UiInput = ({value, handleInputChange, placeholder, classes}) =>
    (
        <div className={cn(styles.wrapper__input, classes)}>
            <input
                type="text"
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={placeholder}
                className={styles.input}
            />
            <img
                src={icon}
                alt="clear"
                className={cn(styles.clear, !value && styles.clear__disabled)}
                onClick={() => value && handleInputChange('')}
            />
        </div>
    );

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
};

export default UiInput;
