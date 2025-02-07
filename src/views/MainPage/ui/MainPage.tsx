import { About } from '@widgets/About/ui/About';
import { Hero } from '@widgets/Hero';
import { Invitation } from '@widgets/Invitation/ui/Invitation';
import { Solutions } from '@widgets/Solutions';

export const MainPage = () => (
	<>
		<Hero />
		<About />
		<Solutions />
		<Invitation />
	</>
);
