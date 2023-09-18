// Уникальные перестановки
function permutations(str) {
    const arr = str.split('')
    const length = arr.length

    // ['a']
    if (length === 1) return arr
    // ['ab', 'ba']
    if (length === 2)
        return [...(new Set([arr.join(''), arr.reverse().join('')]))]

    const res = []
    for (let i = 0; i < length; i++) {
        let bufArr = [...arr]
        let cur = bufArr.splice(i, 1)

        permutations(bufArr.join('')).forEach(k => {
            res.push(cur + k)
        })
    }

    return [...(new Set(res))]
}

// const chai = require('chai');
// chai.config.truncateThreshold = 0;
// const { deepEqual } = chai.assert;
//
// function doTest (string, expected) {
//     const actual = permutations(string);
//     deepEqual(actual.sort(), expected.sort(), `for string "${string}"\n`);
// }
//
// describe('permutations', function () {
//     it('sample tests', function () {
//         doTest('a', ['a']);
//         doTest('ab', ['ab', 'ba']);
//         doTest('abc', ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
//         doTest('aabb', ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
//     });
// });