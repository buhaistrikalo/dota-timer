export const getTimerString = (
    timer: number,
    delay: number,
    disabled: boolean,
    noRepeat?: boolean,
): string => {
    let totalSeconds = delay - (timer % delay);
    if (disabled) totalSeconds = delay;
    if (noRepeat && delay - timer < 0) return '00:00';
    const minutes = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
};

export function xor<T>(a: T, b: T): boolean {
    return (a || b) && !(a && b);
}
