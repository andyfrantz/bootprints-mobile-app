import React from 'react';

import EasyBW from '../assets/images/difficulty/easy.svg';
import MediumBW from '../assets/images/difficulty/medium.svg';
import HardBW from '../assets/images/difficulty/hard.svg';

import DIFFICULTY_LEVEL from '../constants/difficulty-level';

const heightWidthRation = 3.685;
const widthHeightRation = 0.27136;

const defaultWidth  = 199;
const defaultHeight = 54;

const IconDifficulty = props => {
    let height = props.height;
    let width = props.width | defaultWidth;

    if (!!props.height || !!props.width) {
        if (!props.height) {
            height = width * widthHeightRation;
        } else if (!props.width) {
            width = height * heightWidthRation;
        }
    }

    switch (props.name) {
        case DIFFICULTY_LEVEL.EASY:
            return <EasyBW height={height} width={width}/>;
        case DIFFICULTY_LEVEL.MEDIUM:
            return <MediumBW height={height} width={width}/>;
        case DIFFICULTY_LEVEL.HARD:
            return <HardBW height={height} width={width}/>;
        default:
            return null;
    };
};

export default IconDifficulty;
