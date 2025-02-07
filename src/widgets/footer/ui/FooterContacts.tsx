import { DynamicContainerUI } from '@shared/ui';
import clsx from 'clsx';
import { FooterContact, IFooterContact } from './FooterContact';

export interface IFooterContacts {
	label: string;
	contacts: IFooterContact[];
	isAddresses?: boolean;
}

export const FooterContacts: React.FC<IFooterContacts> = ({
	label,
	contacts,
	isAddresses = false,
}) => (
	<DynamicContainerUI
		as={isAddresses ? 'address' : 'div'}
		className={clsx('flex flex-col gap-y-[16px] not-italic')}
	>
		<p>{label}</p>
		<ul className={clsx('flex flex-col gap-y-[12px]')}>
			{contacts.map((item, i) => (
				<FooterContact key={i} {...item} />
			))}
		</ul>
	</DynamicContainerUI>
);
