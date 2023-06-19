import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import Root from './pages/Root';
import Home from './pages/Home';
import Products from './pages/Products';
import PassportRenewal from './pages/PassportRenewal';
import LicenseRenewal from './pages/LicenseRenewal';
import Contact from './pages/Contact';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/products',
					element: <Products />,
				},
				{path: '/passport-renewal', element: <PassportRenewal />},
				{path: '/license-renewal', element: <LicenseRenewal />},
				{
					path: '/contact',
					element: <Contact />,
				},
			],
		},
	]);

	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
