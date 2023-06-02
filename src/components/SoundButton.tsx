import React from 'react';
import styled from 'styled-components';
import { HiSpeakerXMark, HiSpeakerWave } from 'react-icons/hi2';
import { Button } from './common';

const TimerControlButtons = styled(Button)`
    width: 70px;
    height: 70px;
    background-color: #363636;
`;

const SoundButton = () => {
    // audio
    const [isAllowedToPlay, setIsAllowedToPlay] = React.useState(false);

    const handleButtonClick = () => {
        setIsAllowedToPlay((prev) => !prev);
    };

    return (
        <TimerControlButtons onClick={handleButtonClick}>
            {isAllowedToPlay ? <HiSpeakerXMark /> : <HiSpeakerWave />}
        </TimerControlButtons>
    );
};

export default SoundButton;
