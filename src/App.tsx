import React from 'react';
import './App.css';
import Event from './components/Event';
import useTimer from './hooks/useTimer';

function App() {
    const { timer } = useTimer();

    // const timer = 1294;
    const stringTimer = `${Math.floor(timer / 60)
        .toString()
        .padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`;

    // audio
    const [isAllowedToPlay, setIsAllowedToPlay] = React.useState(false);

    const handleButtonClick = () => {
        setIsAllowedToPlay(true);
    };
    
    return (
        <>
            <button onClick={handleButtonClick} style={isAllowedToPlay ? { border: '#fff' } : {}}>
                Включить звук 
            </button>
            {stringTimer}
            <Event
                icon="public/img/bounty_rune.webp"
                audio="public/audio/bounty.mp3"
                timer={timer}
                delay={120}
                title="Bounty"
                isAllowedToPlay
            />
            <Event
                icon="public/img/lotus.webp"
                audio="public/audio/lotus.mp3"
                timer={timer}
                delay={180}
                title="Lotus"
                isAllowedToPlay
            />
            <Event
                icon="public/img/wisdom_rune.webp"
                audio="public/audio/wisdom.mp3"
                timer={timer}
                delay={420}
                title="Wisdom"
                isAllowedToPlay
            />
            <Event
                icon="public/img/tormentor_dire.webp"
                audio="public/audio/tormentor.mp3"
                timer={timer}
                delay={1200}
                title="Tormentor"
                noRepeat
                isAllowedToPlay
            />
        </>
    );
}

export default App;
