import Star from './Star';

export interface StarRatingProps {
  rating: number;
  size?: number;
  totalStars?: number;
}

/**
 * Renders a star rating display.
 * 
 * This component creates a row of stars based on the given rating. It supports
 * full, half, and empty stars to represent fractional ratings.
 * 
 * @param props - The properties for the StarRating component.
 * @returns A React element representing the star rating.
 * 
 * @example
 * ```tsx
 * <StarRating rating={3.5} size={20} totalStars={5} />
 * ```
 */
export default function StarRating({rating, size, totalStars = 5}: StarRatingProps) {
  return <div className="flex gap-0.5 text-emerald-400">
    {[...Array(totalStars)].map((_, index) => (
      <Star key={index} filled={Math.max(rating - index, 0)} size={size} />
    ))}
  </div>
}
