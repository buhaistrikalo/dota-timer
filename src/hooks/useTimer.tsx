import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { incrementByAmount } from 'store/slices/timerSlice';

const useTimer = () => {
    const localStoreTime = useAppSelector((state) => state.timer.value);
    const dispatch = useAppDispatch();

    const [timer, setTimer] = React.useState(localStoreTime);
    const [isStarted, setIsStarted] = React.useState(false);

    const handleStart = (value: boolean) => {
        setIsStarted(value);
    };

    const handleChange = (value: number) => {
        setTimer((prev) => {
            return prev + value;
        });
        dispatch(incrementByAmount(value));
    };

    const handleReset = () => {
        setTimer(0);
        dispatch(incrementByAmount(0));
        setIsStarted(false);
    };

    React.useEffect(() => {
        const intervalId = setInterval(
            () => {
                if (isStarted) handleChange(1);
            },
            1000,
            isStarted,
        ); // изменяет значение таймера каждую секунду

        // Возвращает функцию очистки, которая будет вызываться при размонтировании компонента
        return () => {
            clearInterval(intervalId);
        };
    }, [isStarted]);

    return { timer, isStarted, onStart: handleStart, onReset: handleReset, onChange: handleChange };
};

export default useTimer;
