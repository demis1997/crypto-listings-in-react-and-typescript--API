import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CoinEntry, CoinApiRespone, mapToCoinEntry } from '../../types/Coins';
import { CoinsTable } from './components/CoinsTable';
import { Column } from 'react-table';

//table column headings
export const ExchangeList = () => {
    const [coins, setCoins] = useState<Array<CoinEntry>>([]);
    const columns: Column<CoinEntry>[] = [
        {
            Header: '#',
            accessor: 'rank'
        },
        {
            Header: "Icon",
            accessor: "image"
        },
        {
            Header: "Coin",
            accessor: "coin"
        },
        {
            Header: "symbol",
            accessor: "shortname"
        },
        {
            Header: "Price",
            accessor: "price"
        },
        {
            Header: "24h Volume",
            accessor: "volume"
        },
        {
            Header: "Mkt Cap",
            accessor: "marketCap"
        }
    ];
//api for getting the coins
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false').then(res => {
            const mappedData = res.data.map((coinData: CoinApiRespone) => mapToCoinEntry(coinData));
            setCoins(mappedData);
        }).catch(err => console.log(err));
    }, []);

    return (
        <CoinsTable columns={columns} data={coins} />
    );
}