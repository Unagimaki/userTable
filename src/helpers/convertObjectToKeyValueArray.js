export const convertObjectToKeyValueArray = (inputObject) => {
    return Object.entries(inputObject).map(([key, value]) => ({
        [key]: value
    }));
}