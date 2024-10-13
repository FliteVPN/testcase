import React, { useState, useCallback, useMemo } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import ButtonText from '../../molecules/ButtonText';

const Counter = () => {
    const [index, setIndex] = useState(0);

    const increment = useCallback(() => setIndex((prev) => prev + 1), []);
    const decrement = useCallback(() => setIndex((prev) => prev - 1), []);

    const debouncedIncrement = useDebounce(increment, 300);
    const debouncedDecrement = useDebounce(decrement, 300);

    return (
        <>
            <span>{index}</span>
            <ButtonText onClick={debouncedIncrement} text="Increment" />
            <ButtonText onClick={debouncedDecrement} text="Decrement" />
        </>
    );
};

export default Counter;
