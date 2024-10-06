'use client'
import useProducts from '@/src/data/hooks/useProducts'
import { IconSearch } from '@tabler/icons-react'

/**
 * Props interface for the ProductFilter component
 */
export interface ProductFilterProps {
	className?: string
}

/**
 * ProductFilter component
* 
 * This component renders a search input field with a search icon button.
 * It uses the useProducts hook to manage the search state.
 * 
 * @param props - The component props
 * @returns A React component that renders a product filter input
 */
export default function ProductFilter(props: ProductFilterProps) {
	const { search, setSearch } = useProducts()
	
	return (
		<div>
			<div
				className={`
					flex gap-2 bg-violet-dark border border-white/20 
					rounded-full overflow-hidden ${props.className ?? ''}
				`}
			>
				<input
					value={search ?? ''}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="What are you looking for?"
					className="flex-1 bg-transparent outline-none px-6 py-3"
				/>
				<div className="flex justify-center items-center bg-emerald-500 px-4">
					<IconSearch size={24} className="text-white" />
				</div>
			</div>
		</div>
	)
}