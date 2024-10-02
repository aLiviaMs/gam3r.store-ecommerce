import React from 'react'

export interface TagProps {
	/** The text to be displayed in the tag. */
	label: string
	/** The icon component to be rendered in the tag. */
	icon: React.ElementType
	/** If true, the tag will have an outlined style instead of filled. */
	outlined?: boolean
}

/**
 * Tag Component
 * 
 * This component renders a customizable tag with an icon and label.
 * It can be styled as either filled or outlined.
 * 
 * @param props - The properties for the Tag component.
 * @returns A React element representing a styled tag with an icon and label.
 * 
 * @example
 * ```tsx
 * <Tag label="New" icon={IconStar} />
 * ```
 * 
 * @example
 * ```tsx
 * <Tag label="Featured" icon={IconFlag} outlined />
 * ```
 */
export default function Tag(props: TagProps) {
	return (
		<div
			className={`
				flex items-center gap-2 self-start py-1 px-4
				rounded-full text-xs uppercase
				${
					props.outlined
						? 'border border-violet-500 text-white'
						: 'bg-gradient-to-r from-violet-600 to-violet-700'
				}
			`}
		>
			<props.icon size={15} />
			<span>{props.label}</span>
		</div>
	)
}