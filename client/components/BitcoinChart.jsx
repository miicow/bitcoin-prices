import React, { useState, useEffect, Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import DatesForm from './HistoricalDateForm.jsx';

const BitcoinPrice = () => {
  const [btcDates, setBtcDates] = useState({});
  const [btcDisclaimer, setBtcDisclaimer] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/bitcoin/');
      const data = await response.json();
      setBtcDates(data.bpi);
      setBtcDisclaimer(data.disclaimer);
    }
    fetchData();
  }, []);

  //passing in [] to prevent infinite loop if certain values have not changed during re-render
  //to second parameter of useEffect

  let dataObject = {
    labels: Object.keys(btcDates),
    datasets: [
      {
        label: 'BTC Price',
        data: Object.values(btcDates),
        backgroundColor: ['rgba(13,87,155,0.5)'],
        borderColor: ['rgba(247,147,26,0.9)']
      }
    ]
  };

  return (
    <Fragment>
      <DatesForm />
      <div className="bar-chart-container">
        <Line data={dataObject} />
        <a href="https://www.coindesk.com/price/bitcoin">
          <p>{btcDisclaimer}</p>
        </a>
      </div>
    </Fragment>
  );
};

export default BitcoinPrice;
