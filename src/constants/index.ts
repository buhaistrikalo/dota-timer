import { EventType } from 'types';

export const BUTTONS_DELAY = [10, 30, 60];
export const MODIFY_TIME_BUTTONS = [-60, -30, -10, 10, 30, 60];
export const DEFAULT_EVENTS = [
    {
        id: 0,
        icon: 'public/img/bounty_rune.webp',
        audio: 'public/audio/bounty.mp3',
        delay: 120,
        title: 'Bounty',
        name: 'bounty',
    },
    {
        id: 1,
        icon: 'public/img/lotus.webp',
        audio: 'public/audio/lotus.mp3',
        delay: 180,
        title: 'Lotus',
        name: 'lotus',
    },
    {
        id: 2,
        icon: 'public/img/wisdom_rune.webp',
        audio: 'public/audio/wisdom.mp3',
        delay: 420,
        title: 'Wisdom',
        name: 'wisdom',
    },
    {
        id: 3,
        icon: 'public/img/tormentor_dire.webp',
        audio: 'public/audio/tormentor.mp3',
        delay: 1200,
        title: 'Tormentor',
        name: 'tormentor',
        noRepeat: true,
    },
] as EventType[];

export enum Breakpoint {
    XS = 0,
    SM = 1,
    MD = 2,
    LG = 3,
    XL = 4,
    XXL = 5,
}
