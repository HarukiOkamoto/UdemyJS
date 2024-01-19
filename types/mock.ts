export type idType = {
    [id: string]: mockData;
};

export type mockData = {
    name: string;
    color: colorType;
};

export type colorType = {
    red: number;
    green: needGreen;
    blue: number;
};

export type needGreen = {
    color1: string;
    color2: string;
};

export const profile: idType = {
    '1': {
        name: 'Haruki',
        color: {
            red: 255,
            green: {
                color1: 'yellow',
                color2: 'blue',
            },
            blue: 255,
        },
    },
    '2': {
        name: 'Haruki',
        color: {
            red: 255,
            green: {
                color1: 'yellow',
                color2: 'blue',
            },
            blue: 255,
        },
    },
};
