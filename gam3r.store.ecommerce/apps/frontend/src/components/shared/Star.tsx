import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

interface StarProps {
  filled: number;
  size?: number;
}

/**
 * This function renders a star icon based on the filled percentage provided.
 * 
 * @param {StarProps}  - The `Star` function takes two parametes, filled and size of the star
 * 
 * @returns An JSX element based on the `filled` prop value. If `filled` is greater than or equal to 1, it returns an
 * `<IconStarFilled>` element with the specified `size`. If `filled` is greater
 * than or equal to 0.5 but less than 1, it returns an `<IconStarHalfFilled>`
 * element with the specified
 */
export default function Star({ filled, size = 12 }: StarProps): JSX.Element {
  if (filled >= 1) return <IconStarFilled size={size} />;
  if (filled >= 0.5) return <IconStarHalfFilled size={size} />;
  return <IconStar size={size} />;
}
