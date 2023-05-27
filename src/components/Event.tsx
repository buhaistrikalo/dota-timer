import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { Button, Switcher } from 'components/common';
import { getTimerString } from 'utils';
import DelayButtons from './DelayButtons';

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
    margin-right: 1rem;
`;

const Title = styled.span`
    font-size: 1.3rem;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 1rem;
`;

interface EventProps {
    name: string;
    title: string;
    delay: number;
    icon?: string;
    audio?: string;
    timer: number;
    noRepeat?: boolean;
    settings?: string; // need write new types with settings
    isAllowedToPlay?: boolean;
}

const Event: React.FC<EventProps> = ({
    name,
    title,
    delay,
    icon,
    audio,
    timer,
    noRepeat,
    isAllowedToPlay,
}) => {
    const [isChecked, setIsChecked] = React.useState(true);
    const handleCheck = () => {
        setIsChecked((prev) => !prev);
    };

    React.useEffect(() => {
        if (!audio) return;
        // if (delay - (timer % delay) === delay) playSound(audio);
        // delays.forEach((item) => {
        //     if (delay - (timer % delay) === item) playSound(audio);
        // });
    }, [timer, delay]);

    function playSound(audioFile: string) {
        if (isAllowedToPlay) {
            const audio = new Audio(audioFile);
            audio.volume = 0.1; // устанавливаем громкость на 10%
            audio.loop = false; // запрещаем зацикливание аудио
            audio.play();
        }
    }

    const [delays, setDelays] = React.useState([30]);
    const toggleDelay = (value: number) => {
        setDelays((prevDelay: number[]) => {
            if (prevDelay.includes(value)) {
                // Если delay содержит значение, удалите его
                return prevDelay.filter((item) => item !== value);
            } else {
                // Если delay не содержит значение, добавьте его
                return [...prevDelay, value];
            }
        });
    };

    return (
        <Block>
            {icon && <img src={icon} alt={title} width={50} height={50} />}
            <Timer>{getTimerString(timer, delay, !isChecked, noRepeat)}</Timer>
            <Title>{title}</Title>

            <DelayButtons name={name} delays={delays} toggleDelay={toggleDelay} />

            <Switcher isChecked={isChecked} onChange={handleCheck} />
        </Block>
    );
};

export default Event;
