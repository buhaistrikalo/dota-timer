import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
    value: number;
}

const initialState: TimerState = {
    value: 0,
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            if (action.payload === 0) {
                state.value = action.payload;
                return;
            }
            state.value += action.payload;
        },
    },
});
export const { incrementByAmount } = timerSlice.actions;
