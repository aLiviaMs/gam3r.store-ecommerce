import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

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
export default function Star({ filled, size = 16 }: StarProps): JSX.Element {
  if (filled >= 1) return <Ionicons name='star' size={size} style={styles.icon} />;
  if (filled >= 0.5) return <Ionicons name='star-half' size={size} style={styles.icon}/>;
  return <Ionicons name='star-outline' size={size} style={styles.icon}/>;
}

const styles = StyleSheet.create({
  icon: {
    color: '#34d399',
  },
})
