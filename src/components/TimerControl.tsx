import React, { useState } from 'react';
import { BiMinus, BiPlus, BiPlay, BiPause, BiReset } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Button } from 'components/common';

const MODIFY_TIME_BUTTONS = [-60, -30, -10, 10, 30, 60];

const Container = styled.div`
    background-color: #1d1d1d;
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Column = styled.div`
    text-align: center;
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
            <Row>
                <Column>
                    <Column>
                        <h1>
                            {timer >= 0
                                ? new Date(timer * 1000).toISOString().substr(11, 8)
                                : `-${new Date(Math.abs(timer) * 1000)
                                      .toISOString()
                                      .substr(11, 8)}`}
                        </h1>
                    </Column>
                    <Row style={{ marginBottom: '1rem' }}>
                        {MODIFY_TIME_BUTTONS.map((seconds, index) => (
                            <Button onClick={() => handleChangeTimer(seconds)} key={'sec-' + index}>
                                {seconds > 0 ? (
                                    <BiPlus style={{ marginRight: '0.2rem' }} />
                                ) : (
                                    <BiMinus style={{ marginRight: '0.2rem' }} />
                                )}
                                {Math.abs(seconds)}
                            </Button>
                        ))}
                    </Row>
                    <Row>
                        {!isStarted ? (
                            <>
                                <Button onClick={handleStart}>
                                    <BiPlay />
                                    Start
                                </Button>
                                <Button onClick={handleReset}>
                                    <BiReset />
                                </Button>
                            </>
                        ) : (
                            <Button onClick={handlePause}>
                                <BiPause />
                                Pause
                            </Button>
                        )}
                    </Row>
                </Column>
            </Row>
        </Container>
    );
};

export default TimerControl;
