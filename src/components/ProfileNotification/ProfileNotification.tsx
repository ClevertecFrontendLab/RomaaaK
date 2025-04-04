import './style.scss';

import { Button, Flex, useMediaQuery } from '@chakra-ui/react';
import { BsBookmarkHeart, BsEmojiHeartEyes, BsPeopleFill } from 'react-icons/bs';

const ProfileNotification = () => {
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    return (
        <Flex
            className={`profileNotification ${isLargerThan1440 && 'column'}`}
            right={['75px', '75px', '89px', '89px', '0']}
        >
            <Button
                size={['xs', 'xs', 'xs', 'xs', 'md']}
                variant='ghost'
                leftIcon={<BsBookmarkHeart color='black' />}
                color='lime.600'
            >
                185
            </Button>
            <Button
                size={['xs', 'xs', 'xs', 'xs', 'md']}
                variant='ghost'
                leftIcon={<BsPeopleFill color='black' />}
                color='lime.600'
            >
                589
            </Button>
            <Button
                size={['xs', 'xs', 'xs', 'xs', 'md']}
                variant='ghost'
                leftIcon={<BsEmojiHeartEyes color='black' />}
                color='lime.600'
            >
                587
            </Button>
        </Flex>
    );
};

export default ProfileNotification;
