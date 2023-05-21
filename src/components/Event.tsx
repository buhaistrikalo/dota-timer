import React from 'react';
import styled from 'styled-components';
import Switcher from './common/Switcher';
const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;
    width: 100%;

    border-radius: 5px;

    background-color: #1d1d1d;
    color: #fff;
`;

const Timer = styled.span`
    font-size: 2rem;
`;

const Title = styled.span`
    font-size: 1.3rem;
`;

interface EventProps {
    timer: number;
    title: string;
    delay: number;
    icon?: string;
    audio?: string;
    noRepeat?: boolean;
    settings?: string; // need write new types with settings
    isAllowedToPlay?: boolean;
}

const Event: React.FC<EventProps> = ({ timer, delay, title, icon, audio, noRepeat, isAllowedToPlay }) => {
    const [isChecked, setIsChecked] = React.useState(true);
    const handleCheck = () => {
        setIsChecked((prev) => !prev);
    };

    const getValue = (
        timer: number,
        delay: number,
        disabled: boolean,
        noRepeat?: boolean,
    ): string => {
        let totalSeconds = delay - (timer % delay);
        if (disabled) totalSeconds = delay;
        if (noRepeat && delay - timer < 0) return '00:00';
        const minutes = Math.floor(totalSeconds / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');

        return `${minutes}:${seconds}`;
    };

    React.useEffect(() => {
        if (!audio) return;
        if (delay - (timer % delay) === delay) playSound(audio);
        //  console.log(timer)
    }, [timer, delay]);

    function playSound(audioFile: string) {
        if (isAllowedToPlay) {
            const audio = new Audio(audioFile);
            audio.volume = 0.1; // устанавливаем громкость на 10%
            audio.loop = false; // запрещаем зацикливание аудио
            audio.play();
        }
    }

    return (
        <Block>
            {icon && <img src={icon} alt={title} width={50} height={50} />}
            <Timer>{getValue(timer, delay, !isChecked, noRepeat)}</Timer>
            <Title>{title}</Title>
            <Switcher isChecked={isChecked} onChange={handleCheck} />
        </Block>
    );
};

export default Event;
