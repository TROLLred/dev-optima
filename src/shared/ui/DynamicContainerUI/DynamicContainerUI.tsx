import { ElementType, JSX } from 'react';

type IntrinsicElement = keyof JSX.IntrinsicElements;

export type DynamicContainerUIProps<T extends IntrinsicElement> = {
	as?: T;
} & JSX.IntrinsicElements[T];

export const DynamicContainerUI = <T extends IntrinsicElement = 'div'>({
	as: elementType = 'div' as T,
	...rest
}: DynamicContainerUIProps<T>) => {
	const Tag = elementType as ElementType;
	return <Tag {...rest} />;
};
