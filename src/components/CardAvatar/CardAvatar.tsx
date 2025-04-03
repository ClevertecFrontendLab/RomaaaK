import { Avatar, Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react';

import avatar from '../../assets/images/avatar/desktop_photo.png';

const CardAvatar = () => (
    <Card direction='row' align='center' bg='transparent' variant='unstyled' gap='10px' size='md'>
        <Avatar size='md' name='Екатерина Константинопольская' src={avatar} />

        <Stack>
            <CardBody>
                <Heading fontSize='18px' color='black' lineHeight={7} letterSpacing={0.1}>
                    Екатерина Константинопольская
                </Heading>
                <Text fontSize='sm' lineHeight={4} color='blackAlpha' letterSpacing={0.1}>
                    @bake_and_pie
                </Text>
            </CardBody>
        </Stack>

        <Avatar size='md' name='Екатерина Константинопольская' src={avatar} opacity='0' />
    </Card>
);

export default CardAvatar;
