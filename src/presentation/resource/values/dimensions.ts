
import { Dimensions } from 'react-native';

const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scaleWidth = SCREEN_WIDTH / DESIGN_WIDTH;
const scaleHeight = SCREEN_HEIGHT / DESIGN_HEIGHT;

export const dimensions = {
    scaleWidth,
    scaleHeight,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
};
