import App from './App';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Shop', element: <Shop /> },
      { path: 'Cart', element: <Cart /> },
    ],
  },
]; //add error element later

export default routes;
