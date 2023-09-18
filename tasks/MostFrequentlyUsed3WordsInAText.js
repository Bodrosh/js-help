function topThreeWords(text) {
    // Чистим строки, оставляем буквы в нижнем регистре, пробелы и '
    text = text.trim().toLowerCase().replace(/[^a-z \']/gi, '')
    // Массив символов без пробелов и '
    const arr = text.split(' ').filter(i => (i !== '') && (i !== '\''))

    // Уникальные символы
    const uniqueWords = new Set(arr)
    // В Map - ключи - символы, значения - встречающееся количество раз
    const map = new Map(uniqueWords.entries())

    // Считаем сколько раз какой символ встретился
    for (let [key, value] of map) {
        map.set(key, arr.reduce((acc, i) => {
            return i === key ? acc + 1 : acc
        }, 0))
    }

    // Берем 3 самы встречаемых (сортируем по алфавиту и кол-ву встреч)
    const entries = [...map]
        .sort((a, b) => b[1] - a[1] || b[0] - a[0])
        .slice(0,3)
    return entries.map(i => i[0])
}

function topThreeWords2(text) {
    text = text.trim().toLowerCase()
}


var assert = require('assert');
describe("Tests", () => {
    it("Поиск 3-х чаще всего встречающихся символов", () => {
        assert.deepEqual(topThreeWords(" a dddDDD a' a #, \,  b  / , .  c c  d'' d d d  e e e e e"), ['e','d','a'])

        assert.deepEqual(topThreeWords("a a c b b"), ['a','b','c'])

        assert.deepEqual(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])

        assert.deepEqual(topThreeWords("  //wont won't won't "), ["won't", "wont"])

        assert.deepEqual(topThreeWords("  , e   .. "), ["e"])

        assert.deepEqual(topThreeWords("  ...  "), [])

        assert.deepEqual(topThreeWords("  '  "), [])

        assert.deepEqual(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`), ['a','of','on'])
    });
});
