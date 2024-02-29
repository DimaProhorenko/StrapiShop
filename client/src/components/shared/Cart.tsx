import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '../ui/button';

const Cart = () => {
	const [count, setCount] = useState(0);
	console.log(setCount);
	return (
		<Button variant='ghost' size='icon'>
			<ShoppingCartOutlinedIcon />
			<span>{count}</span>
		</Button>
	);
};
export default Cart;
