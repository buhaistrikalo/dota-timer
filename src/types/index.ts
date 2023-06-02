export interface EventType {
    id: number;
    icon: string;
    audio: string;
    delay: number;
    title: string;
    name: string;
    noRepeat?: boolean;
}

export interface DelaysSettings {
    enabled: boolean;
    delay: number;
}
