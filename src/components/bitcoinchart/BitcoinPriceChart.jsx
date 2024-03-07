// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";
import "./BitcoinPriceChart.css";
import { IoMdArrowDropup } from "react-icons/io";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|1D"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "400",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": true,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(41, 98, 255, 1)",
          "topColor": "rgba(41, 98, 255, 0.64)",
          "bottomColor": "rgba(255, 255, 255, 1)"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

function BitcoinPriceChart() {
  return (
    <div className="bitcoin container">
      <div className="bitcoin_header">
        <span className="bitcoin_img">
          <img src="/public/bitcoin.png" alt="bitcoin" />
        </span>
        <h2 className="bitcoin_heading">Bitcoin</h2>
        <span className="bitcoin_subheading">BTC</span>
        <span className="bitcoin_pill">Rank #1</span>
      </div>
      <div className="bitcoin_price">
        <h3 className="bitcoin_price__curr">$46,953.40</h3>
        <span className="pill">
          <IoMdArrowDropup /> <span>8.21%</span>
        </span>
        <span className="bitcoin_price__subheading">(24H)</span>
      </div>
      <p className="pricein_rs">39,42,343</p>
      <TradingViewWidget />
    </div>
  );
}

export default BitcoinPriceChart;
