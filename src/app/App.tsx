import { Box, Container, Flex } from '@chakra-ui/react';

import Header from '~/components/Header/Header';
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
                        bg='gray'
                        pos='fixed'
                        h='calc(100vh - 80px)'
                        overflowY='auto'
                        display={['none', 'none', 'none', 'none', 'block']}
                    >
                        fsdgdg
                        <Box pos='absolute' bottom='0'>
                            sdfd
                        </Box>
                    </Box>
                    <Box as='main' bg='green' w='100%' ml={['0', '0', '0', '0', '280px']}>
                        sdf
                        <Box h={2000}>sdfsf</Box>
                    </Box>
                    <Box minW='280px' display={['none', 'none', 'none', 'none', 'block']} />
                </Flex>
            </Container>
        </>
    );
}

export default App;
