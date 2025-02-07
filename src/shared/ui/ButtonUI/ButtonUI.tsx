import clsx from 'clsx';
import styles from './ButtonUI.module.scss';

interface IButtonUI extends React.PropsWithChildren {
	variant: 'primary' | 'outlined';
	className?: string;
	type?: 'submit' | 'button';
}

export const ButtonUI: React.FC<IButtonUI> = ({
	variant,
	className,
	children,
	type = 'button',
}) => (
	<button
		className={clsx(
			className,
			'rounded-full px-[36] py-[14] text-white transition',
			styles[variant],
		)}
		type={type}
	>
		{children}
	</button>
);
