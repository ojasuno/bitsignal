import { Dialog } from '@headlessui/react'

export default function BTC() {

  async function getBitcoinPrice(): Promise<string> {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    const price = data.bitcoin.usd.toLocaleString('en-US');
    return `Bitcoin Price: $${price}`;
  }

  async function displayBitcoinPrice() {
    const price = await getBitcoinPrice();
    const ticker = document.createElement('div');
    ticker.style.position = 'fixed';
    ticker.style.top = '0';
    ticker.style.left = '0';
    ticker.style.width = '100%';
    ticker.style.backgroundColor = 'black';
    ticker.style.color = 'white';
    ticker.style.fontSize = '24px';
    ticker.style.textAlign = 'center';
    ticker.style.whiteSpace = 'nowrap';
    ticker.style.overflow = 'hidden';
    const span = document.createElement('span');
    span.textContent = price;
    span.style.display = 'inline-block';
    span.style.paddingLeft = '100%';
    span.style.animation = 'ticker 10s linear infinite';
    ticker.appendChild(span);
    document.body.insertBefore(ticker, document.body.firstChild);
  }

  return (
    <Dialog
      static
      open={true}
      onClose={displayBitcoinPrice}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
    </Dialog>
  )
}
