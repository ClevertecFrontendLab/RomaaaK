import { Box, Button, Container, Flex, Text, VStack } from '@chakra-ui/react';
import { BiLogOut } from 'react-icons/bi';

import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';
import Menu from '~/components/Menu/Menu';
import menu from '~/menu';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <Header />
            <Container px='0' pos='relative' pt='80px'>
                <Flex>
                    <Box
                        as='aside'
                        minW='256px'
                        w='256px'
                        pos='fixed'
                        h='calc(100vh - 80px)'
                        display={['none', 'none', 'none', 'none', 'block']}
                        pt='24px'
                    >
                        <Flex direction='column' h='100%'>
                            <Box flex='1' overflowY='auto'>
                                <Menu menu={menu} />
                            </Box>
                            <Box as='footer'>
                                <VStack
                                    align='flex-start'
                                    pl='24px'
                                    pb='28px'
                                    gap='14px'
                                    fontSize='xs'
                                    lineHeight='4'
                                >
                                    <Text
                                        fontWeight='medium'
                                        letterSpacing='0.5px'
                                        color='blackAlpha.300'
                                    >
                                        Версия программы 03.25
                                    </Text>
                                    <Text
                                        fontWeight='normal'
                                        letterSpacing='0.5px'
                                        color='blackAlpha.700'
                                    >
                                        Все права защищены, <br />
                                        ученический файл,
                                        <br /> ©Клевер Технолоджи, 2025
                                    </Text>
                                    <Button
                                        size='xs'
                                        p='0'
                                        variant='ghost'
                                        colorScheme='black'
                                        leftIcon={<BiLogOut />}
                                        fontWeight='semibold'
                                    >
                                        Выйти
                                    </Button>
                                </VStack>
                            </Box>
                        </Flex>
                    </Box>
                    <Box as='main' bg='green' w='100%' ml={['0', '0', '0', '0', '280px']}>
                        sdf
                        <Box h={2000}>sdfsf</Box>
                    </Box>
                    <Box minW='280px' display={['none', 'none', 'none', 'none', 'block']} />
                </Flex>
            </Container>
            <Footer />
        </>
    );
}

export default App;
