import clsx from 'clsx';
import styles from './GlowboxUI.module.scss';

interface IGlowboxUI extends React.PropsWithChildren {
	className?: string;
}

export const GlowboxUI: React.FC<IGlowboxUI> = ({ children, className }) => (
	<span
		className={clsx(
			className,
			styles.glowbox,
			'flex items-center justify-center',
		)}
	>
		{children}
	</span>
);
