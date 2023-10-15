// import './index.css';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import App from './App';
// import ReactDOM from 'react-dom/client';

// const queryClient = new QueryClient({
// 	defaultOptions: {
// 		queries: {
// 			refetchOnWindowFocus: false,
// 		},
// 	},
// });

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<QueryClientProvider client={queryClient}>
// 		<App />
// 	</QueryClientProvider>
// );

import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
