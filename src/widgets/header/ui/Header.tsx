import { ButtonUI } from '@shared/ui';
import clsx from 'clsx';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';

export const Header = () => {
	return (
		<header
			className={clsx(
				'fixed top-0 right-0 left-0 z-[100] flex h-[var(--header-height)] items-center justify-between px-[224]',
			)}
		>
			<HeaderLogo />
			<HeaderNav />
			<ButtonUI variant='outlined'>Get Started</ButtonUI>
		</header>
	);
};
