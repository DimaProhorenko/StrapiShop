import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { HOME, PRODUCTS } from '@/constants/routes';
import { Cart, Logo } from '../shared';

const Navbar = () => {
	return (
		<header>
			<div className='container'>
				<nav className='flex items-center justify-between'>
					<ul className='flex gap-2 items-center'>
						<li>
							<Link to={`${PRODUCTS}/1`}>Women</Link>
						</li>
						<li>
							<Link to={`${PRODUCTS}/2`}>Men</Link>
						</li>
						<li>
							<Link to={`${PRODUCTS}/3`}>Children</Link>
						</li>
					</ul>
					<Logo />
					<ul className='flex gap-2 items-center'>
						<li>
							<Link to={HOME}>Home</Link>
						</li>
						<li>
							<Link to={HOME}>About</Link>
						</li>
						<li>
							<Link to={HOME}>Contact</Link>
						</li>
						<li>
							<div className='flex items-center gap-2'>
								<SearchOutlinedIcon />
								<PersonOutlineIcon />
								<FavoriteBorderOutlinedIcon />
								<Cart />
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default Navbar;
