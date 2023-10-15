// import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

// import About from './pages/About';
// import Catalog from './pages/Catalog';
// import Error from './pages/Error';
// import Faq from './pages/Faq';
// import { FilterProvider } from './components/FilterContext';
// import FullCard from './pages/FullCard';
// import Header from './components/Header';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
// import Registration from './pages/Registration';
// import Restore from './pages/Restore';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: (
// 			<FilterProvider>
// 				<Header />
// 				<div>
// 					<Outlet />
// 				</div>
// 			</FilterProvider>
// 		),
// 		children: [
// 			{ index: true, element: <Home /> },
// 			{ path: '/game/:gameId', element: <FullCard /> },
// 			{ path: 'profile', element: <Profile /> },
// 			{ path: 'login', element: <Login /> },
// 			{ path: 'restore', element: <Restore /> },
// 			{ path: 'registration', element: <Registration /> },
// 			{ path: 'catalog', element: <Catalog /> },
// 			{ path: 'about', element: <About /> },
// 			{ path: 'faq', element: <Faq /> },
// 			{ path: '*', element: <Error /> },
// 		],
// 	},
// ]);

// const App = () => {
// 	return <RouterProvider router={router} />;
// };

// export default App;

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './pages/About';
import Error from './pages/Error';
import Faq from './pages/Faq';
import Header from './components/Header';
import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<div>
				<Header />
				<div>
					<Outlet />
				</div>
			</div>
		),
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About /> },
			{ path: 'faq', element: <Faq /> },
			{ path: '*', element: <Error /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;