import { Container, Row, Col } from 'reactstrap';
import useTimer from './hooks/useTimer';
import Event from './components/Event';
import SoundButton from './components/SoundButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TimerControl from './components/TimerControl';

// ! кнопки управления таймером
// ! кнопка мута
// ! redux (interface // persist)
// ! Отказаться от reacstrap
// ! Задизайнить

function App() {
    const { timer, isStarted, onStart, onReset, onChange } = useTimer();

    // const timer = 1294;
    const stringTimer = `${Math.floor(timer / 60)
        .toString()
        .padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`;

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <TimerControl
                        timer={timer}
                        isStarted={isStarted}
                        onStart={onStart}
                        onReset={onReset}
                        onChange={onChange}
                    />
                </Col>
                <Col md={6}>
                    <Row style={{ justifyContent: 'flex-end' }}>
                        <Col>
                            <SoundButton />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Event
                                icon="public/img/bounty_rune.webp"
                                audio="public/audio/bounty.mp3"
                                timer={timer}
                                delay={120}
                                title="Bounty"
                                name="bounty"
                                isAllowedToPlay
                            />
                        </Col>
                        <Col>
                            <Event
                                icon="public/img/lotus.webp"
                                audio="public/audio/lotus.mp3"
                                timer={timer}
                                delay={180}
                                title="Lotus"
                                name='lotus'
                                isAllowedToPlay
                            />
                        </Col>
                        <Col>
                            <Event
                                icon="public/img/wisdom_rune.webp"
                                audio="public/audio/wisdom.mp3"
                                timer={timer}
                                delay={420}
                                title="Wisdom"
                                name='wisdom'
                                isAllowedToPlay
                            />
                        </Col>
                        <Col>
                            <Event
                                icon="public/img/tormentor_dire.webp"
                                audio="public/audio/tormentor.mp3"
                                timer={timer}
                                delay={1200}
                                title="Tormentor"
                                name='tormentor'
                                noRepeat
                                isAllowedToPlay
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
