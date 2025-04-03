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
        600: '#2db100',
    },
    blackAlpha: 'rgb(0 0 0 / 64%)',
};

const components = {
    Container: {
        baseStyle: {
            maxW: '1920px',
        },
    },
};

const theme = extendTheme({
    breakpoints,
    components,
    colors,
});

export default theme;
