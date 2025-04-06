import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '0px', // Начальная точка (обычно 0)
    sm: '360px', // Мобильные устройства
    md: '768px', // Планшеты
    lg: '1440px', // Ноутбуки
    xl: '1920px', // Десктопы
};

const colors = {
    lime: {
        50: '#ffffd3',
        100: '#eaffc7',
        300: '#c4ff61',
        600: '#2db100',
    },
    blackAlpha: {
        400: 'rgb(0 0 0 / 24%)',
        700: 'rgb(0 0 0 / 64%)',
        900: 'rgb(0 0 0 / 92%)',
    },
};

const components = {
    Container: {
        baseStyle: {
            maxW: '1920px',
        },
    },
    Link: {
        baseStyle: {
            textDecor: 'none',
            _hover: {
                textDecor: 'none',
            },
        },
    },
};

const theme = extendTheme({
    breakpoints,
    components,
    colors,
});

export default theme;
