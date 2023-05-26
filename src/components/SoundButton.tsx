import React from 'react';
import { HiSpeakerXMark, HiSpeakerWave } from 'react-icons/hi2';
const SoundButton = () => {
    // audio
    const [isAllowedToPlay, setIsAllowedToPlay] = React.useState(false);

    const handleButtonClick = () => {
        setIsAllowedToPlay(prev => !prev);
    };

    return (
        <button onClick={handleButtonClick} style={isAllowedToPlay ? { border: '#fff' } : {}}>
            {isAllowedToPlay ? <HiSpeakerXMark /> : <HiSpeakerWave />}
        </button>
    );
};

export default SoundButton;
