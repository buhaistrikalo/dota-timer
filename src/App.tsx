import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { DEFAULT_EVENTS } from 'constants';
import useTimer from './hooks/useTimer';

import Event from './components/Event';
import TimerControl from './components/TimerControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
`;

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
                <Row className="gap-4 pt-4 pb-4">
                    {DEFAULT_EVENTS.map((event, index) => (
                        <Col md={12} key={index}>
                            <Event
                                index={index}
                                icon={event.icon}
                                audio={event.audio}
                                delay={event.delay}
                                timer={timer}
                                title={event.title}
                                name={event.name}
                                noRepeat={event.noRepeat}
                            />
                        </Col>
                    ))}
                </Row>
            </Colx>
        </AppContainer>
    );
}

export default App;
