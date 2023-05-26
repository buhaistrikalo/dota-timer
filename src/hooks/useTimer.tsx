import React from 'react';

const useTimer = () => {
    const [timer, setTimer] = React.useState(118);
    const [isStarted, setIsStarted] = React.useState(true);

    const handleStart = (value: boolean) => {
        setIsStarted(value);
    };

    const handleChange = (value: number) => {
        setTimer((prev) => prev + value);
    };

    const handleReset = () => {
        setTimer(0);
        setIsStarted(false);
    };

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            if (isStarted) setTimer((timer) => timer + 1);
        }, 1000, isStarted); // изменяет значение таймера каждую секунду

        // Возвращает функцию очистки, которая будет вызываться при размонтировании компонента
        return () => {
            clearInterval(intervalId);
        };
    }, [isStarted]);

    // const handleChange =

    return { timer, isStarted, onStart: handleStart, onReset: handleReset, onChange: handleChange };
};

export default useTimer;
