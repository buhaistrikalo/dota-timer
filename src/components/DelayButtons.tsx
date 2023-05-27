import React from 'react';
import { Row, Popover, PopoverBody } from 'reactstrap';
import { Button } from './common';
import { IoMdSettings } from 'react-icons/io';
import useBreakpoint, { Breakpoint } from 'hooks/useBreakpoint';

const BUTTONS_DELAY = [10, 30, 60];

interface DelayButtonsProps {
    name: string;
    delays: number[];
    toggleDelay: (delay: number) => void;
}
const DelayButtons: React.FC<DelayButtonsProps> = ({ name, delays, toggleDelay }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen((prev) => !prev);

    const breakpoint = useBreakpoint();

    React.useEffect(() => {
        setIsOpen(false);
    }, [breakpoint]);

    if (breakpoint < Breakpoint.MD) {
        return (
            <div className="mr-3">
                <Button id={`delay-button-${name}`} type="button">
                    <IoMdSettings />
                </Button>
                <Popover
                    placement="top"
                    isOpen={isOpen}
                    target={`delay-button-${name}`}
                    toggle={toggle}
                    style={{ backgroundColor: '#363636', borderRadius: '5px' }}>
                    <PopoverBody>
                        {BUTTONS_DELAY.map((item) => (
                            <Button
                                key={`delay-${name}-${item}`}
                                onClick={() => toggleDelay(item)}
                                active={delays.includes(item)}>
                                {item}
                            </Button>
                        ))}
                    </PopoverBody>
                </Popover>
            </div>
        );
    } else {
        return (
            <Row>
                {BUTTONS_DELAY.map((item) => (
                    <Button
                        key={`delay-${name}-${item}`}
                        onClick={() => toggleDelay(item)}
                        active={delays.includes(item)}>
                        {item}
                    </Button>
                ))}
            </Row>
        );
    }
};

export default DelayButtons;
