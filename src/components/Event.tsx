import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { IoMdSettings } from 'react-icons/io';
import { BUTTONS_DELAY, Breakpoint } from 'constants';

import { getTimerString, xor } from 'utils';
import useBreakpoint from 'hooks/useBreakpoint';
import { Button, Switcher } from 'components/common';

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;
    width: 100%;

    border-radius: 5px;
`;

const LeftGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const RightGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Timer = styled.span`
    font-size: 2rem;
    margin-right: 1rem;
`;

const Title = styled.span`
    font-size: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 1rem;
`;

const DelayButton = styled(Button)`
    width: 50px;
    height: 50px;
    background-color: #363636;
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

// ! Закинуть всю фигню со звуками в отдельный хук

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

    // Delay buttons show logic
    const breakpoint = useBreakpoint();
    const [isShowDelays, setIsShowDelays] = React.useState(false);
    const handleShowDelays = () => {
        setIsShowDelays((prev) => !prev);
    };
    React.useEffect(() => {
        setIsShowDelays(false);
    }, [breakpoint]);

    const showSettings = breakpoint === Breakpoint.LG || breakpoint < Breakpoint.MD;

    return (
        <Block>
            <LeftGroup>
                {icon && <img src={icon} alt={title} width={50} height={50} />}
                <Timer>{getTimerString(timer, delay, !isChecked, noRepeat)}</Timer>
                {!isShowDelays && <Title>{title}</Title>}
            </LeftGroup>
            <RightGroup>
                <Row className="gap-2 mr-3">
                    {!xor<boolean>(showSettings, isShowDelays) &&
                        BUTTONS_DELAY.map((item) => (
                            <DelayButton
                                key={`delay-${name}-${item}`}
                                onClick={() => toggleDelay(item)}
                                active={delays.includes(item)}>
                                {item}
                            </DelayButton>
                        ))}

                    {showSettings && (
                        <DelayButton
                            id={`delay-button-${name}`}
                            type="button"
                            onClick={handleShowDelays}
                            active={isShowDelays}>
                            <IoMdSettings />
                        </DelayButton>
                    )}
                </Row>
                <Switcher isChecked={isChecked} onChange={handleCheck} width={70} />
            </RightGroup>
        </Block>
    );
};

export default Event;
