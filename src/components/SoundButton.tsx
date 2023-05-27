import React from 'react';
import { HiSpeakerXMark, HiSpeakerWave } from 'react-icons/hi2';
import { Button } from './common';


const SoundButton = () => {
    // audio
    const [isAllowedToPlay, setIsAllowedToPlay] = React.useState(false);

    const handleButtonClick = () => {
        setIsAllowedToPlay(prev => !prev);
    };

    return (
        <Button onClick={handleButtonClick} >
            {isAllowedToPlay ? <HiSpeakerXMark /> : <HiSpeakerWave />}
        </Button>
    );
};

export default SoundButton;
