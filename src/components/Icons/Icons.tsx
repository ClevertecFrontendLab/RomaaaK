import { Image, ImageProps } from '@chakra-ui/react';

import salad from '../../assets/icons/1.png';
import appetizers from '../../assets/icons/2.png';
import firstCourse from '../../assets/icons/3.png';
import mainCourse from '../../assets/icons/4.png';
import dessert from '../../assets/icons/5.png';
import grilled from '../../assets/icons/6.png';
import vegan from '../../assets/icons/7.png';
import children from '../../assets/icons/8.png';
import therapeuticNutrition from '../../assets/icons/9.png';
import national from '../../assets/icons/10.png';
import sauce from '../../assets/icons/11.png';
import drink from '../../assets/icons/12.png';
import preserve from '../../assets/icons/13.png';

export type IconName =
    | 'salad'
    | 'appetizers'
    | 'firstCourse'
    | 'mainCourse'
    | 'dessert'
    | 'grilled'
    | 'vegan'
    | 'children'
    | 'therapeuticNutrition'
    | 'national'
    | 'sauce'
    | 'drink'
    | 'preserve';

const iconMap: Record<IconName, string> = {
    salad,
    appetizers,
    firstCourse,
    mainCourse,
    dessert,
    grilled,
    vegan,
    children,
    therapeuticNutrition,
    national,
    sauce,
    drink,
    preserve,
};

interface IconProps extends ImageProps {
    name: IconName;
}

const Icons = ({ name, ...props }: IconProps) => (
    <Image src={iconMap[name]} alt={name} {...props} />
);

export default Icons;
