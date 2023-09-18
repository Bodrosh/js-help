// Количество гласных
const getCount = (str) => str
    .split('')
    .reduce((acc, i) => acc + (['a', 'e', 'i', 'o', 'u'].includes(i) ? 1 : 0), 0)