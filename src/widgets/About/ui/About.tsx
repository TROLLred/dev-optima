import AboutBackground from '@shared/assets/images/Main/About/AboutBackground.png';
import { SectionUI } from '@shared/ui';
import Image from 'next/image';

export const About: React.FC = () => (
	<SectionUI className='relative flex w-full flex-col items-end pt-[73] pb-[171]'>
		<Image
			className='absolute inset-0 z-[-1] object-cover object-left'
			src={AboutBackground}
			alt='some block xd'
		/>
		<div className='flex flex-col gap-[20]'>
			<h2>What is DevOptima?</h2>
			<p>
				At&nbsp;DevOptima, we&nbsp;are a&nbsp;team of&nbsp;passionate DevOps
				experts
				<br />
				committed to&nbsp;transforming the way businesses approach software
				<br />
				development and operations.
			</p>
		</div>
	</SectionUI>
);
