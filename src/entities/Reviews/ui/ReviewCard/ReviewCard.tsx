import { ReviewCardAuthor } from './ReviewCardAuthor';

interface ReviewCard {
	text: string;
}

export const ReviewCard: React.FC<ReviewCard> = ({ text }) => (
	<div className='px-[40] py-[44]'>
		<div>
			<p dangerouslySetInnerHTML={{ __html: text }}></p>
		</div>
		<ReviewCardAuthor />
	</div>
);
