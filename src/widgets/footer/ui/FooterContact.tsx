import Link from 'next/link';

export interface IFooterContact {
	text: string;
	href?: string;
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const FooterContact: React.FC<IFooterContact> = ({
	text,
	Icon,
	href = '/',
}) => (
	<li>
		<Link
			target='_blank'
			href={href}
			className='text-grey-200 hover:text-grey-100 flex items-center gap-x-[10px] transition'
		>
			{Icon ? <Icon /> : null}
			{text}
		</Link>
	</li>
);
