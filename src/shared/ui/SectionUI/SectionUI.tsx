import clsx from 'clsx';

interface ISectionUI extends React.PropsWithChildren {
	className?: string;
}

export const SectionUI: React.FC<ISectionUI> = ({ className, children }) => (
	<section className={clsx('px-[350]', className)}>{children}</section>
);
