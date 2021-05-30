import React from 'react';

import ArdennesColor from '../assets/images/regions/ardennes.svg';
import GuttlandColor from '../assets/images/regions/guttland.svg';
import LuxembourgColor from '../assets/images/regions/luxembourg.svg';
import MoselleColor from '../assets/images/regions/moselle.svg';
import MullerthalColor from '../assets/images/regions/mullerthal.svg';
import TerresRougesColor from '../assets/images/regions/terres-rouges.svg';

import REGIONS from '../constants/country-regions';

const heightWidthRation = 0.69231;
const widthHeightRation = 1.44444;

const defaultWidth  = 450;
const defaultHeight = 650;

const IconRegion = props => {
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
        case REGIONS.ARDENNES:
            return <ArdennesColor height={height} width={width}/>;
        case REGIONS.GUTTLAND:
            return <GuttlandColor height={height} width={width}/>;
        case REGIONS.LUXEMBOURG:
            return <LuxembourgColor height={height} width={width}/>;
        case REGIONS.MOSELLE:
            return <MoselleColor height={height} width={width}/>;
        case REGIONS.MULLERTHAL:
            return <MullerthalColor height={height} width={width}/>;
        case REGIONS.TERRES_ROUGES:
            return <TerresRougesColor height={height} width={width}/>;
        default:
            return null;
    };
};

export default IconRegion;
