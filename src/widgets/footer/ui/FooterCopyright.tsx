export const FooterCopyright: React.FC = () => {
	const CURRENT_YEAR = new Date().getFullYear();

	return (
		<p className='text-grey-200'>
			Devoptima {CURRENT_YEAR}&nbsp;&copy; All rights reserved
		</p>
	);
};
