import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Container,
    Flex,
    IconButton,
    Spacer,
    useMediaQuery,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';
import { BsBookmarkHeart, BsEmojiHeartEyes, BsPeopleFill } from 'react-icons/bs';

import CardAvatar from '../CardAvatar/CardAvatar';
import Logo from '../Logo/Logo';

const Header = () => {
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    return (
        <Box as='header' bg='lime.50'>
            <Container p={['4', '4', '4', '5']} py={['2', '2', '2', '2', '4']}>
                <Flex align='center'>
                    <Box>
                        <Logo />
                    </Box>
                    {isLargerThan1440 ? (
                        <>
                            <Box ml='32'>
                                <Breadcrumb letterSpacing={0.5}>
                                    <BreadcrumbItem isCurrentPage>
                                        <BreadcrumbLink href='#'>Все рецепты</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </Box>
                            <Spacer />
                            <CardAvatar />
                        </>
                    ) : (
                        <>
                            <Spacer />
                            <Box mr={['3', '3', '3', '4']}>
                                <Flex>
                                    <Button
                                        size='xs'
                                        variant='ghost'
                                        colorScheme='lime.50'
                                        leftIcon={<BsBookmarkHeart color='black' />}
                                        color='lime.600'
                                    >
                                        185
                                    </Button>
                                    <Button
                                        size='xs'
                                        variant='ghost'
                                        colorScheme='lime.50'
                                        leftIcon={<BsPeopleFill color='black' />}
                                        color='lime.600'
                                    >
                                        589
                                    </Button>
                                    <Button
                                        size='xs'
                                        variant='ghost'
                                        colorScheme='lime.50'
                                        leftIcon={<BsEmojiHeartEyes color='black' />}
                                        color='lime.600'
                                    >
                                        587
                                    </Button>
                                </Flex>
                            </Box>
                            <IconButton
                                colorScheme='lime.50'
                                variant='ghost'
                                aria-label='Open menu'
                                size='lg'
                                rounded='50'
                                icon={<BiMenu size='24px' />}
                            />
                        </>
                    )}
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
