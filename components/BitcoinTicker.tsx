import React, { useEffect, useState } from 'react';

interface BitcoinTickerProps {
  interval?: number;
}

const BitcoinTicker: React.FC<BitcoinTickerProps> = ({ interval = 10000 }) => {
  const [price, setPrice] = useState<string>('');

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      const formattedPrice = data.bitcoin.usd.toLocaleString('en-US');
      setPrice(`Bitcoin Price: $${formattedPrice}`);
    };

    fetchPrice();
    const intervalId = setInterval(fetchPrice, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'black',
      color: 'orange',
      fontSize: '21px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    }}>
      <span style={{
        display: 'inline-block',
        paddingLeft: '100%',
        animation: 'ticker 10s linear infinite',
      }}>{price}</span>
    </div>
  );
};

export default BitcoinTicker;