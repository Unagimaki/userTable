export const transformObjectToArray = (inputObject) => {
    // Проверяем, что аргумент — объект
    if (typeof inputObject !== 'object' || inputObject === null) {
        throw new Error('Аргумент должен быть объектом');
    }

    // Преобразуем объект в массив, добавляя ключ как поле `id`
    return Object.entries(inputObject).map(([key, value]) => ({
        utm: key,
        ...value
    }));
}