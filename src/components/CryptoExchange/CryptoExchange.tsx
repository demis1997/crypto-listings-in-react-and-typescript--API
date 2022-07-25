import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ExchangeList } from '../ExchangeList/ExchangeList';
import { MetamaskWallet } from '../MetamaskWallet/MetamaskWallet';

export const CryptoExchange = () => {
//nav bar ui stuff, positions, icons, tabs
    return (
        <Box position='absolute' borderWidth='1px' borderRadius='lg' overflow='hidden' w='40%' marginLeft='5%'  marginTop='5%'>
            <Tabs align='center'>
                <TabList>
                    <Tab>
                        <FontAwesomeIcon icon={solid('house')} style={{ marginRight: '10px' }} />
                        Home
                    </Tab>
                    <Tab>
                        <FontAwesomeIcon icon={solid('wallet')} style={{ marginRight: '10px' }} />
                        Wallet
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ExchangeList />
                    </TabPanel>
                    <TabPanel>
                        <MetamaskWallet />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};