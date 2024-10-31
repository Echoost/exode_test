import { useState, useEffect } from 'react';

export const useDebounce = <T>(value: T, time = 1000) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, time);
        return () => clearTimeout(timeout);
    }, [value]);

    return debouncedValue;
};
