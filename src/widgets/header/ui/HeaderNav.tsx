import Link from 'next/link';
import { HEADER_LINKS } from '../constants/HeaderLinks';

export const HeaderNav: React.FC = () => {
	return (
		<nav className='absolute right-[100%] left-[100%] flex items-center justify-center self-center justify-self-center'>
			<ul className='color-white flex gap-x-[48px] opacity-90'>
				{HEADER_LINKS.map((headerLink, i) => (
					<li key={i} className='hover:weight-500 whitespace-nowrap transition'>
						<Link {...headerLink}>{headerLink.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
