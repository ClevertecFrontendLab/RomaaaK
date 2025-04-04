import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Container,
    Flex,
    IconButton,
    Spacer,
    useMediaQuery,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

import CardAvatar from '../CardAvatar/CardAvatar';
import Logo from '../Logo/Logo';
import ProfileNotification from '../ProfileNotification/ProfileNotification';

const Header = () => {
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    return (
        <Box
            as='header'
            bg='lime.50'
            pos='fixed'
            top='0'
            left='0'
            w='100%'
            zIndex='2'
            data-test-id='header'
        >
            <Container p={['4', '4', '4', '5']} py={['2', '2', '2', '2', '4']} pos='relative'>
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
                            <IconButton
                                colorScheme='lime.50'
                                variant='ghost'
                                aria-label='Open menu'
                                size='lg'
                                rounded='50'
                                icon={<BiMenu size='24px' />}
                                mr='0'
                            />
                        </>
                    )}
                    <ProfileNotification />
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
