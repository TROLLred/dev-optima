import { REVIEW_CARDS } from '../constants/ReviewCards';

export const ReviewSection: React.FC = () => (
	<section className='relative grid grid-cols-2'>
		bg
		{REVIEW_CARDS.map((reviewCard, i) => (
			<div key={i}></div>
		))}
	</section>
);
