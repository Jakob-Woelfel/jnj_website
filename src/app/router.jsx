import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Startseite from '../content/startseite';
import Leistungen from '../content/leistungen';
import Referenzen from '../content/referenzen';
import UeberUns from '../content/ueber-uns';
import Kontakt from '../content/kontakt';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Startseite /> },
      { path: 'leistungen', element: <Leistungen /> },
      { path: 'referenzen', element: <Referenzen /> },
      { path: 'ueber-uns', element: <UeberUns /> },
      { path: 'kontakt', element: <Kontakt /> },
    ],
  },
]);
