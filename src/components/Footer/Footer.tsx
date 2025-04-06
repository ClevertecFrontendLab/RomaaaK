import { Avatar, Box, Container, HStack, Icon, IconButton, Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { BsHouse, BsPencilSquare, BsSearch } from 'react-icons/bs';

import avatar from '../../assets/images/avatar/desktop_photo.png';

const Footer = () => (
    <Box
        as='footer'
        data-test-id='footer'
        display={['block', 'block', 'block', 'block', 'none']}
        bg='lime.50'
        pos='fixed'
        bottom='0'
        left='0'
        w='100%'
    >
        <Container p='0' py='10px'>
            <HStack lineHeight='4' fontSize='xs' color='blackAlpha.700' gap='0'>
                <FooterItem
                    text='Главная'
                    icon={<Icon as={BsHouse} boxSize='24px' />}
                    areaLabel='Go Home Page'
                />
                <FooterItem
                    text='Поиск'
                    icon={<Icon as={BsSearch} boxSize='24px' />}
                    areaLabel='Search'
                />
                <FooterItem
                    text='Записать'
                    icon={<Icon as={BsPencilSquare} boxSize='24px' />}
                    areaLabel='add'
                />
                <FooterItem
                    text='Мой профиль'
                    icon={
                        <Avatar boxSize='40px' name='Екатерина Константинопольская' src={avatar} />
                    }
                    areaLabel='my profile'
                />
            </HStack>
        </Container>
    </Box>
);

interface FooterItemProps {
    text: string;
    icon: ReactElement;
    areaLabel: string;
}

const FooterItem = (props: FooterItemProps) => (
    <VStack gap='0' flex='1'>
        <IconButton
            variant='solid'
            aria-label={props.areaLabel}
            size='lg'
            icon={props.icon}
            rounded='50'
            bg='lime.50'
            color='blackAlpha.900'
        />
        <Text>{props.text}</Text>
    </VStack>
);

export default Footer;
