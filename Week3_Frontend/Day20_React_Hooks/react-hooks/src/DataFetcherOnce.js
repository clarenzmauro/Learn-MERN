import React, { useState, useEffect } from 'react';

function DataFetcherOnce() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Effect ran: Simulating data fetch...');
    setTimeout(() => {
      setData({ message: 'Data fetched successfully!' });
      setLoading(false);
      console.log('Data fetch complete.');
    }, 2000);
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <h2>Data Fetcher (Runs Once)</h2>
      <p>{data ? data.message : 'No data yet.'}</p>
    </div>
  );
}
export default DataFetcherOnce;