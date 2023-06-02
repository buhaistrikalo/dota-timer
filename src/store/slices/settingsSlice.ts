import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BUTTONS_DELAY, DEFAULT_EVENTS } from 'constants';

interface SettingsState {
    muted: boolean;
    volume: number;
    events: EventSettings[];
}

interface EventSettings {
    id: number;
    enabled: boolean;
    delays: DelaysSettings[];
}

interface DelaysSettings {
    enabled: boolean;
    delay: number;
}

const initialState: SettingsState = {
    muted: false,
    volume: 0,
    events: [
        ...DEFAULT_EVENTS.map((event) => ({
            id: event.id,
            enabled: true,
            delays: [
                ...BUTTONS_DELAY.map((delay) => ({
                    enabled: true,
                    delay,
                })),
            ],
        })),
    ],
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleMute: (state) => {
            state.muted = !state.muted;
        },
        toggleVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        },
        toggleEvent: (state, action: PayloadAction<number>) => {
            state.events[action.payload].enabled = !state.events[action.payload].enabled;
        },
        toggleDelay: (state, action: PayloadAction<number>) => {
            state.events[action.payload].delays[action.payload].enabled =
                !state.events[action.payload].delays[action.payload].enabled;
        },
    },
});

export const { toggleMute, toggleVolume, toggleEvent, toggleDelay } = settingsSlice.actions;
