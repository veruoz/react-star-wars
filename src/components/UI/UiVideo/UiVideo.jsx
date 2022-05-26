import React, {useEffect, useRef} from 'react';
import styles from './UiVideo.module.css'
import cn from 'classnames'
import PropTypes from "prop-types";

const UiVideo = ({ src, classes, playbackRate = 1.0 }) => {
    // передача свойств в элемент после монтирования компонента(useEffect) посредством доступа к дом-элементу useRef
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    }, []);

    return (
        <video
            className={cn(styles.video, classes)}
            ref={videoRef}
            loop
            autoPlay
            muted>
            <source src={src}/>
        </video>
    );
}

UiVideo.propTypes = {
    src:          PropTypes.string,
    classes:      PropTypes.string,
    playbackRate: PropTypes.number,
};

export default UiVideo;
