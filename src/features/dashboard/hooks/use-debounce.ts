import { useEffect, useState } from "react";

export const useSearchDebounce = (value: string, delay = 500) => {
  const [search, setSearch] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setSearch(value);
    }, delay);

    return () => clearTimeout(id);
  }, [value, delay]);

  return search;
};
