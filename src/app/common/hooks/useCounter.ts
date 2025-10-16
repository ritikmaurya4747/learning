import { useCallback, useState } from "react";

// Interface for hook options, allows customization
interface UseCounterOptions {
  initialValue?: number; // Counter start value, default 0
  min?: number;          // Minimum value counter can go, default 0
  max?: number;          // Maximum value counter can go, default Infinity
  step?: number;         // Step size for increment/decrement, default 1
}

// Custom counter hook
const useCounter = ({
  initialValue = 0,
  min = 0,
  max = Infinity,
  step = 1,
}: UseCounterOptions) => {
  // State to hold current count
  const [count, setCount] = useState(initialValue);

  // Increment function with optional max limit
  // useCallback ensures the function reference doesn't change on every render
  const increment = useCallback(() => {
    setCount((prev) => Math.min(prev + step, max)); // Prevent count from exceeding max
  }, [max, step]);

  // Decrement function with optional min limit
  // useCallback prevents unnecessary re-renders in child components
  const decrement = useCallback(() => {
    setCount((prev) => Math.max(prev - step, min)); // Prevent count from going below min
  }, [min, step]);

  // Reset function to go back to initial value
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  // Return current count and all functions
  return { count, increment, decrement, reset };
};

// Default export of the hook
export default useCounter;
