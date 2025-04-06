import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Link,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import Icons, { IconName } from '../Icons/Icons';

interface Submenu {
    name: string;
    slug: string;
}

interface Menu {
    name: string;
    iconName: IconName;
    subcategories: Submenu[];
}

export interface MenuProps {
    menu: Menu[];
}

const Menu = ({ menu }: MenuProps) => (
    <Box as='nav'>
        <Accordion defaultIndex={[0]} allowToggle p='10px' pr='16px'>
            {menu.map((menuItem) => (
                <AccordionItem border='none'>
                    {({ isExpanded }) => (
                        <>
                            <Text>
                                <AccordionButton
                                    px='8px'
                                    py='12px'
                                    color='black'
                                    fontSize='md'
                                    _expanded={{
                                        bg: 'lime.100',
                                        fontWeight: 'bold',
                                    }}
                                    _hover={{
                                        bg: 'lime.50',
                                    }}
                                    {...(menuItem.name === 'Веганская кухня' && {
                                        'data-test-id': 'vegan-cuisine',
                                    })}
                                >
                                    <Flex
                                        as='span'
                                        flex='1'
                                        textAlign='left'
                                        align='center'
                                        gap='12px'
                                        letterSpacing='0.6px'
                                    >
                                        <Icons name={menuItem.iconName} /> {menuItem.name}
                                    </Flex>
                                    {isExpanded ? <BsChevronUp /> : <BsChevronDown />}
                                </AccordionButton>
                            </Text>
                            <AccordionPanel p='0'>
                                <List>
                                    {menuItem.subcategories.map((item) => (
                                        <ListItem
                                            py='6px'
                                            pl='40px'
                                            _hover={{
                                                bg: 'lime.50',
                                                '& a': {
                                                    borderColor: 'transparent',
                                                },
                                            }}
                                            sx={{
                                                '& .active': {
                                                    borderLeft: '8px',
                                                    borderColor: 'lime.300',
                                                    left: '-8px',
                                                    fontWeight: 'bold',
                                                },
                                            }}
                                        >
                                            <Link
                                                display='block'
                                                borderLeft='1px'
                                                pl='11px'
                                                borderColor='lime.300'
                                                pos='relative'
                                                letterSpacing='0.6px'
                                            >
                                                {item.name}
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    </Box>
);

export default Menu;
