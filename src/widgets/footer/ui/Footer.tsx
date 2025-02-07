import { CONTACTS } from '../constants/Contacts';
import { FooterContacts } from './FooterContacts';
import { FooterCopyright } from './FooterCopyright';
import { FooterLogo } from './FooterLogo';

export const Footer: React.FC = () => {
	return (
		<footer
			className={
				'flex w-full justify-between border-t border-blue-400 bg-black px-[224] py-[48]'
			}
		>
			<div className={'flex flex-col justify-between'}>
				<FooterLogo />
				<FooterCopyright />
			</div>
			<div className={'flex gap-x-[176px]'}>
				{CONTACTS.map((contact, i) => (
					<FooterContacts key={i} {...contact} />
				))}
			</div>
		</footer>
	);
};
