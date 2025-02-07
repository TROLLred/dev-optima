import DiscourseIcon from '@shared/assets/icons/DiscourseIcon.svg';
import GitHubIcon from '@shared/assets/icons/GitHubIcon.svg';
import LinkedInIcon from '@shared/assets/icons/LinkedInIcon.svg';
import TwitterIcon from '@shared/assets/icons/TwitterIcon.svg';

export const CONTACTS = [
	{
		label: 'Resources',
		contacts: [
			{
				text: 'Docs',
				href: '/',
			},
			{
				text: 'Release notes',
				href: '/',
			},
			{
				text: 'Security',
				href: '/',
			},
		],
	},
	{
		label: 'Community',
		isAddresses: true,
		contacts: [
			{
				text: 'Twitter',
				href: 'https://x.com/',
				Icon: TwitterIcon,
			},
			{
				text: 'LinkedIn',
				href: 'https://linkedin.com/',
				Icon: LinkedInIcon,
			},
			{
				text: 'GitHub',
				href: 'https://github.com/',
				Icon: GitHubIcon,
			},
			{
				text: 'Discourse',
				href: 'https://discourse.org/',
				Icon: DiscourseIcon,
			},
		],
	},
	{
		label: 'Legal',
		contacts: [
			{
				text: 'Privacy policy',
				href: '/',
			},
			{
				text: 'Terms of service',
				href: '/',
			},
		],
	},
];
