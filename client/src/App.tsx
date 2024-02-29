import { Routes, Route } from 'react-router-dom';
import { Home, Product, Products } from '@/_root/pages/';
import { HOME, PRODUCTS_FULL, PRODUCT_FULL } from './constants/routes';
import RootLayout from './_root/RootLayout';

function App() {
	return (
		<Routes>
			<Route element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path={HOME} element={<Home />} />
				<Route path={PRODUCTS_FULL} element={<Products />} />
				<Route path={PRODUCT_FULL} element={<Product />} />
			</Route>
		</Routes>
	);
}

export default App;
