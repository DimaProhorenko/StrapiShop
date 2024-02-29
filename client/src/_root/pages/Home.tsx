import { Card } from '@/components/ui/card';
import { ApiProductProduct } from '@/types/generated/contentTypes';
import { CardContent } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
	const [products, setProducts] = useState([]);
	console.log(import.meta.env.VITE_API_URL);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					import.meta.env.VITE_API_URL + '/products?populate=*',
					{
						headers: {
							Authorization:
								'bearer ' + import.meta.env.VITE_API_TOKEN,
						},
					}
				);
				setProducts(res.data.data);
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			{products &&
				products.map((item: ApiProductProduct) => (
					<li key={item.id}>
						<Card>
							<CardContent>
								<img
									src={`${import.meta.env.VITE_UPLOAD_URL}${
										item.attributes.coverImage.data
											.attributes.url
									}`}
									alt={item.attributes.title}
									className='block w-28 h-28 object-cover'
								/>
							</CardContent>
						</Card>
					</li>
				))}
		</div>
	);
};
export default Home;
