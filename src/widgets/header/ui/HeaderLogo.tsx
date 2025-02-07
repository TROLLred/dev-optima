import HeaderLogoIcon from '@shared/assets/icons/HeaderLogoIcon.svg';
import Link from 'next/link';

export const HeaderLogo = () => (
	<Link href={'/'} className='flex'>
		<HeaderLogoIcon className='h-[48] w-[193]' />
	</Link>
);
