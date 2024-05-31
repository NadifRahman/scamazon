import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]); //Array that holds all items
  const [loading, setLoading] = useState(true); //True or false value of loading state
  const [error, setError] = useState(null); //null if no error, otherwise an error

  useEffect(() => {
    const fetchForItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          mode: 'cors',
        });

        if (!response.ok) {
          //if there was a problem fetching the request, throw error w/ appro. msg
          throw new Error(`Unable to fetch; Status: ${response.status}`);
        }

        const responseData = await response.json(); //parse the json
        setItems(responseData); //set the item state
        setError(null); //set error to null, meaning no error occured
      } catch (err) {
        //if error caught, whether bad http request or otherwise
        setError(err.message);
        setData([]); //set to empty array
      } finally {
        setLoading(false); //loading finishes
      }
    };

    fetchForItems();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet
        context={{ items, setItems, loading, setLoading, error, setError }}
      />

      {/* This element changes to whats needed*/}
    </>
  );
}

export default App;
