
//properties of coins from api along with their types to be used in crypto exchange and exchange list files
export interface CoinApiRespone {
    id: string;
    symbol: string;
    name: string;
    image: string;
    price_change_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    current_price: number;
    market_cap_rank: number;
}

export interface CoinEntry {
    coin: string;
    shortname: string;
    image: string;
    price: string;
    volume: string;
    marketCap: string;
    rank: number;
}

export const mapToCoinEntry = (coinData: CoinApiRespone): CoinEntry => {
    return {
        rank: coinData.market_cap_rank,
        coin: coinData.name,
        shortname: coinData.symbol.toLocaleUpperCase(),
        image: coinData.image,
        price: `$${new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 }).format(coinData.current_price)}`,
        volume: `$${new Intl.NumberFormat('en-us', { minimumFractionDigits: 0 }).format(coinData.market_cap_change_24h)}`,
        marketCap: `$${new Intl.NumberFormat('en-us', { minimumFractionDigits: 0 }).format(coinData.market_cap)}`,
    }
}