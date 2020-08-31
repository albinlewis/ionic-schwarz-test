// check if time is a 0,5h step
export const validateTime = (value: number) => {
    return value % 0.5 === 0;
};

