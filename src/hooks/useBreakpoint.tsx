import { useEffect, useState } from 'react';

export enum Breakpoint {
    XS = 0,
    SM = 1,
    MD = 2,
    LG = 3,
    XL = 4,
    XXL = 5
}

const useBreakpoint = (): Breakpoint => {
    const getBreakpoint = (): Breakpoint => {
        const breakpoints = [Breakpoint.XS, Breakpoint.SM, Breakpoint.MD, Breakpoint.LG, Breakpoint.XL, Breakpoint.XXL];
        const widths = [0, 576, 768, 992, 1200, 1400];
        const windowWidth = window.innerWidth;

        for (let i = widths.length - 1; i >= 0; i--) {
            if (windowWidth >= widths[i]) {
                return breakpoints[i];
            }
        }

        return Breakpoint.XS;
    };

    const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getBreakpoint());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return breakpoint;
};

export default useBreakpoint;
