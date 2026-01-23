export const random = () => Math.random();

export const randomInt = (min: number, max: number) =>
    Math.floor(random() * (max - min)) + min;

export const randomBool = () => random() < 0.5;

export const randomElement = <T>(array: T[]) =>
    array[randomInt(0, array.length)];
