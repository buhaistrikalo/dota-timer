import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

import { MODIFY_TIME_BUTTONS } from 'constants';
import { BiMinus, BiPlus, BiReset } from 'react-icons/bi';
import { Button } from 'components/common';
import SoundButton from 'components/SoundButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    background-color: #1d1d1d;
    color: #fff;
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PrimaryButton = styled(Button)<{ active?: boolean }>`
    min-width: 220px;
    height: 100px;
    background-color: #fff;
    color: #1a1a1a;
    font-size: 36px;

    border: none;
    box-shadow: ${({ active }) => (active ? 'inset 0 -6px 0 #cdcdcd' : 'none')};
    transform: ${({ active }) => !active && 'translateY(6px)'};
`;

const TimerControlButtons = styled(Button)`
    width: 70px;
    height: 70px;
    background-color: #363636;
`;
const Timer = styled.span`
    font-size: 4rem;
`;

interface TimerControlProps {
    timer: number;
    isStarted: boolean;
    onStart: (value: boolean) => void;
    onReset: () => void;
    onChange: (value: number) => void;
}
const TimerControl: React.FC<TimerControlProps> = ({
    timer,
    isStarted,
    onStart,
    onReset,
    onChange,
}) => {
    const handleStart = () => onStart(true);
    const handlePause = () => onStart(false);
    const handleReset = () => onReset();

    const handleChangeTimer = (seconds: number) => {
        onChange(seconds);
    };

    return (
        <Container>
            <Col className="text-align-center pt-5 pb-5">
                <Row className="mb-2">
                    <Timer>
                        {timer >= 0
                            ? new Date(timer * 1000).toISOString().substr(11, 8)
                            : `-${new Date(Math.abs(timer) * 1000).toISOString().substr(11, 8)}`}
                    </Timer>
                </Row>
                <Row className="mb-5 gap-2">
                    {MODIFY_TIME_BUTTONS.map((seconds, index) => (
                        <TimerControlButtons
                            onClick={() => handleChangeTimer(seconds)}
                            key={'sec-' + index}>
                            {seconds > 0 ? <BiPlus /> : <BiMinus />}
                            {Math.abs(seconds)}
                        </TimerControlButtons>
                    ))}
                </Row>
                <Row className='gap-2'>
                    <SoundButton />
                    {!isStarted ? (
                        <PrimaryButton onClick={handleStart} active>
                            <span>Start</span>
                        </PrimaryButton>
                    ) : (
                        <PrimaryButton onClick={handlePause}>
                            <span>Pause</span>
                        </PrimaryButton>
                    )}
                    <TimerControlButtons onClick={handleReset}>
                        <BiReset />
                    </TimerControlButtons>
                </Row>
            </Col>
        </Container>
    );
};

export default TimerControl;
