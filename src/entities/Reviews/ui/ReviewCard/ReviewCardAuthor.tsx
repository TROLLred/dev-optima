import Image from 'next/image';

export interface IReviewCardAuthor {
	photo: string;
	name: string;
	position: string;
}

export const ReviewCardAuthor: React.FC<IReviewCardAuthor> = ({
	photo,
	name,
	position,
}) => (
	<div>
		<Image {...photo} />
		<h4>{name}</h4>
		<p>{position}</p>
	</div>
);
