import React from 'react'

const useTimer = () => {
    const [timer, setTimer] = React.useState(118);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000); // изменяет значение таймера каждую секунду

        // Возвращает функцию очистки, которая будет вызываться при размонтировании компонента
        return () => {
            clearInterval(intervalId);
        };
    }, []);



  return {timer}
}

export default useTimer