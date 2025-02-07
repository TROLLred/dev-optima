import clsx from 'clsx';
import {
	DynamicContainerUI,
	DynamicContainerUIProps,
} from '../DynamicContainerUI/DynamicContainerUI';
import styles from './TypographyUI.module.scss';

export interface ITypographyConstructor extends DynamicContainerUIProps {
	variant: string;
}

const TypographySettings = [
	{
		variant: 'typography-h1',
		as: 'h1',
	},
	{
		variant: 'typography-h2',
		as: 'h2',
	},
	{
		variant: 'typography-h4',
		as: 'h4',
	},
	{
		variant: '',
		as: 'p',
	},
	{
		variant: '',
		as: 'p',
	},
	{
		variant: '',
		as: 'p',
	},
];

const TypographyUIConstructor: React.FC = ({
	variant,
	className,
	...props
}) => (
	<DynamicContainerUI className={clsx(styles[variant], className)} {...props} />
);

export const TypographyUI = {};
