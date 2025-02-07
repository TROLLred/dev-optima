import SolutionsBackground from '@shared/assets/images/Main/Solutions/SolutionsBackground.png';
import { SectionUI } from '@shared/ui';
import Image from 'next/image';
import { SOLUTIONS_LIST } from '../constants/SolutionsList';
import { SolutionsList } from './SolutionsList';

export const Solutions: React.FC = () => (
	<SectionUI className='relative flex flex-col items-center gap-[56px] py-[32px]'>
		<div className='flex flex-col gap-[20] text-center'>
			<h2>Innovative solutions for operational excellence</h2>
			<p>
				Tailored DevOps expertise driving your business momentum.
				<br />
				Personalized solutions for growth and evolution.
			</p>
		</div>
		<SolutionsList cards={SOLUTIONS_LIST} />
		<Image
			src={SolutionsBackground}
			alt='pidarasi na dizainerah'
			className='absolute inset-0 z-[-1] object-cover object-center'
		/>
	</SectionUI>
);
