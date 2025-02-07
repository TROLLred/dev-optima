export const ScrollToBlock = (
	targetId: string,
	isSmooth: boolean = true,
): void => {
	const headerBlock = document.querySelector('header');
	const targetBlock = document.querySelector(`${targetId}`);

	if (!targetBlock) return;

	const headerHeight = headerBlock?.clientHeight ?? 0;
	const targetTop = targetBlock.clientTop;

	window.scrollTo({
		top: targetTop - headerHeight,
		left: 0,
		behavior: isSmooth ? 'smooth' : 'instant',
	});
};
