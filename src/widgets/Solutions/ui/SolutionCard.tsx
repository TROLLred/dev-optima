import Image, { StaticImageData } from 'next/image';
import styles from './Solutions.module.scss';

export interface ISolutionCard {
	title: string;
	description: string;
	preview: StaticImageData;
}

export const SolutionCard: React.FC<ISolutionCard> = ({
	title,
	description,
	preview,
}) => (
	<div className={styles.solutionCard}>
		<Image
			src={preview}
			className='h-[277px] w-full object-cover object-left'
			alt={'похуй абсолютно'}
		/>
		<div className='flex flex-col gap-[12px] px-[32px] pb-[32px]'>
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	</div>
);
