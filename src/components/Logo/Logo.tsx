import { Image, useMediaQuery } from '@chakra-ui/react';

import logoAll from '../../assets/images/logo/logo_all.png';
import logoImg from '../../assets/images/logo/logo_img.png';

const Logo = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    const logo = isLargerThan768 ? logoAll : logoImg;

    return <Image src={logo} h='32px' />;
};

export default Logo;
