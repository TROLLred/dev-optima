import HeroBackground from '@shared/assets/images/Main/Hero/HeroBackground.png';
import { ButtonUI } from '@shared/ui';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './Hero.module.scss';
/*
	If wanna re-use this component in other pages,
	move content to Views layer and add props to IHero
*/

export const Hero: React.FC = () => (
	<section className='flex flex-col gap-[36px] px-[224] pt-[136] pb-[127]'>
		<Image
			src={HeroBackground}
			className='object-right-center absolute inset-0 z-[-1] object-cover object-right'
			alt='grid with windows and highlights'
		/>
		<div className='flex w-[716px] flex-col gap-y-[28px]'>
			<h1 className={clsx(styles.heroTitle, 'typography-h1')}>
				Revolutionize
				<br />
				your DevOps journey
				<br />
				with DevOptima
			</h1>
			<p className='typography-p'>
				Empower teams to&nbsp;innovate faster through streamlined development,
				<br />
				efficient automated workflows, and reliable scaling.
			</p>
		</div>
		<div>
			<ButtonUI variant='primary'>Free trial</ButtonUI>
		</div>
	</section>
);
