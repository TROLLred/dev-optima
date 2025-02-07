import { ISolutionCard, SolutionCard } from './SolutionCard';

interface ISolutionsList {
	cards: ISolutionCard[];
}

export const SolutionsList: React.FC<ISolutionsList> = ({ cards }) => (
	<div className='grid w-full grid-cols-3 gap-[40px]'>
		{cards.map((card, i) => (
			<SolutionCard {...card} key={i} />
		))}
	</div>
);
