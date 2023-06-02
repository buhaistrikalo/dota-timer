import React from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { toggleMute } from 'store/slices/settingsSlice';

import { HiSpeakerXMark, HiSpeakerWave } from 'react-icons/hi2';
import { Button } from './common';

const TimerControlButtons = styled(Button)`
    width: 70px;
    height: 70px;
    background-color: #363636;
`;

const SoundButton = () => {
    const muted = useAppSelector((state) => state.settings.muted);
    const dispatch = useAppDispatch();
    // audio
    const [isAllowedToPlay, setIsAllowedToPlay] = React.useState(muted);

    const handleButtonClick = () => {
        setIsAllowedToPlay((prev) => !prev);
        dispatch(toggleMute());
    };

    return (
        <TimerControlButtons onClick={handleButtonClick}>
            {isAllowedToPlay ? <HiSpeakerXMark /> : <HiSpeakerWave />}
        </TimerControlButtons>
    );
};

export default SoundButton;
