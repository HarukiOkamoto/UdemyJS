export type mockData = {
    id: number;
    name: string;
    color: colorType;
};

export type colorType = {
    red: number;
    green: colorType2;
    blue: string;
};

export type colorType2 = {
    color1: string;
    color2: string;
};

export const profile: mockData = {
    id: 1,
    name: 'Haruki',
    color: {
        red: 255,
        green: {
            color1: 'yellow',
            color2: 'blue',
        },
        blue: 255,
    },
};
