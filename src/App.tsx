import { Container, Row, Col } from 'reactstrap';
import useTimer from './hooks/useTimer';
import Event from './components/Event';
import SoundButton from './components/SoundButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TimerControl from './components/TimerControl';

// ! Задизайнить
// кнопки управления таймером
// ! redux (interface // persist)
// ! кнопка мута

function App() {
    const { timer, isStarted, onStart, onReset, onChange } = useTimer();

    return (
        <Container>
            <Row>
                <Col xl={6} lg={12}>
                    <TimerControl
                        timer={timer}
                        isStarted={isStarted}
                        onStart={onStart}
                        onReset={onReset}
                        onChange={onChange}
                    />
                </Col>
                <Col xl={6} lg={12}>
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
                                name="lotus"
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
                                name="wisdom"
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
                                name="tormentor"
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
