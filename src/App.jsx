import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This element changes to whats needed*/}
    </>
  );
}

export default App;
