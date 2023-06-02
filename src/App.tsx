import { Row, Col } from 'reactstrap';
import useTimer from './hooks/useTimer';
import Event from './components/Event';
import TimerControl from './components/TimerControl';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

//  Квадратные кнопки
// ! redux (interface // persist)
// ! enum - не константа
// ! gap для AppContainer
// Задизайнить
// кнопки управления таймером
// ! кнопка мута
// ! Font change

const AppContainer = styled(Row)`
    margin: 1rem;
    flex-direction: row;
    justify-content: space-between;

    color: #fff;
`;

const Colx = styled(Col)`
    background-color: #1d1d1d;
    border-radius: 10px;
    // margin: 1rem;
`;

const ColCenter = styled(Colx)`
    display: flex;
    justify-content: center;
    align-items: center;
`

function App() {
    const { timer, isStarted, onStart, onReset, onChange } = useTimer();

    return (
        <AppContainer>
            <ColCenter xl={5} lg={6} md={12}>
                <TimerControl
                    timer={timer}
                    isStarted={isStarted}
                    onStart={onStart}
                    onReset={onReset}
                    onChange={onChange}
                />
            </ColCenter>
            <Colx xl={6} lg={6} md={12}>
                <Row className='gap-4 pt-4 pb-4'>
                    <Col md={12}>
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
                    <Col md={12}>
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
                    <Col md={12}>
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
                    <Col md={12}>
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
            </Colx>
        </AppContainer>
    );
}

export default App;
