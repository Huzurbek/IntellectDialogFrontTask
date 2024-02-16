import { useEffect, useState } from "react";

export interface IProps<T> {
  value: T;
  delay?: number;
}
export const useDebounce = <T>({ value, delay }: IProps<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
