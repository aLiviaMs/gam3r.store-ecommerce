import { IProduct } from '@gstore/core'
import {
    IconChevronDown,
    IconMoodConfuzed,
    IconMoodHappy,
    IconMoodSad,
} from '@tabler/icons-react'

/**
 * Props interface for the ProductPriceMeter component.
 */
export interface ProductPriceMeterProps {
    product: IProduct
}

/**
 * ProductPriceMeter component displays a price meter for a given product.
 * It visualizes how the current price compares to the average, minimum, and maximum prices.
 *
 * @param props - The component props.
 * @returns A React component that renders the price meter.
 */
export default function ProductProductPriceMeter({product}: Readonly<ProductPriceMeterProps>) {
    const {
        lowestPrice: minimum,
        highestPrice: maximum,
        promotionalPrice: current,
        averagePrice: average,
    } = product

    /**
     * Calculates the percentage position of the current price on the price meter.
     * The scale is divided into two parts:
     * - 0-50%: below average
     * - 50-100%: above average
     */
    let percentage
    if (current > average) {
        percentage = ((current - average) / (maximum - average)) * 50 + 50
    } else {
        percentage = (1 - (average - current) / (average - minimum)) * 50
    }

    return (
        <div className="flex flex-col border border-white/10 p-7 rounded-xl gap-4 bg-violet-dark">
            <div className="flex items-center gap-2">
                {/* Render mood icon based on price position */}
                {percentage >= 40 && percentage < 60 ? (
                    <IconMoodConfuzed
                        size={40}
                        stroke={1.5}
                        className="text-yellow-500"
                    />
                ) : percentage >= 60 ? (
                    <IconMoodSad
                        size={40}
                        stroke={1.5}
                        className="text-red-500"
                    />
                ) : (
                    <IconMoodHappy
                        size={40}
                        stroke={1.5}
                        className="text-green-500"
                    />
                )}
                <div className="flex flex-col">
                    <div className="flex gap-1.5">
                        <span>The product price is </span>
                        <div className="font-bold">
                            {/* Display price status text */}
                            {percentage >= 40 && percentage < 60 ? (
                                <span className="text-yellow-500">
                                    average
                                </span>
                            ) : percentage >= 60 ? (
                                <span className="text-red-500">
                                    above average
                                </span>
                            ) : (
                                <span className="text-green-500">
                                    below average
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="text-zinc-400 text-sm">
                        Based on the price of the last{' '}
                        <span className="text-white">30 days</span>.
                    </div>
                </div>
            </div>

            {/* Price meter visualization */}
            <div
                className="
                    flex items-center h-2 bg-gradient-to-r 
                    from-green-500 via-yellow-400 to-red-500
                    rounded-full relative border-2 border-black
                "
            >
                {/* Price indicator */}
                <div
                    className="absolute flex justify-center items-center h-4 w-4 bg-white rounded-full"
                    style={{
                        left: `${percentage}%`,
                    }}
                >
                    <IconChevronDown
                        size={20}
                        className="absolute text-white -mt-8"
                    />
                    <div className="h-2.5 w-2.5 bg-black rounded-full"></div>
                </div>
            </div>
        </div>
    )
}