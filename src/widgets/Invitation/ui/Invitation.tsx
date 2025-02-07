import InvitationBackground from '@shared/assets/images/Main/Invitation/InvitationBackground.png';
import { ButtonUI, SectionUI } from '@shared/ui';
import Image from 'next/image';
import styles from './Invation.module.scss';

export const Invitation: React.FC = () => (
	<SectionUI className='relative flex flex-col items-center pt-[32px] pb-[176px]'>
		<Image
			className='absolute inset-0 z-[-1]'
			src={InvitationBackground}
			alt='Beautiful gradient, just trust me blind man)))'
		/>
		<div className='flex flex-col gap-[20px] text-center'>
			<h2 className={styles.invitationTitle}>
				Ready to elevate your DevOps strategy
			</h2>
			<p>
				Join the multitude of companies benefiting from optimized DevOps
				practices.
				<br />
				Contact us to discover how DevOptima can help your business.
			</p>
		</div>
		<div className='flex gap-y-[18]'>
			<ButtonUI className='py-[16px]' variant='primary'>
				Contact us
			</ButtonUI>
			<ButtonUI className='py-[16px]' variant='outlined'>
				Try for free
			</ButtonUI>
		</div>
	</SectionUI>
);
