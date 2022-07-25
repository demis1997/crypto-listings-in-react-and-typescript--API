import * as React from 'react';

import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/react';


export const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container>
            <Button onClick={() => toggleColorMode()}
                pos='absolute'
                top='0'
                right='0'
                m='1rem'
            >
                {colorMode === 'dark' ? <SunIcon color='white' /> : <MoonIcon color='black' />}
            </Button>
        </Container>
    );
};