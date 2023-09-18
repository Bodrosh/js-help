// Преобразование цифр из римских в арабские и наоборот

class RomanNumerals {

    static numbers = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }

    static toRoman(num) {
        let res = ''

        let numberArr = Object.keys(RomanNumerals.numbers).reverse()
        while (num) {
            // вычитаем из числа сначала большие, пока это возможно, затем переходим к меньшим
            for (let i = 0; i < numberArr.length; i++) {
                if (num - +numberArr[i] >= 0) {
                    num -= +numberArr[i]
                    res +=  RomanNumerals.numbers[numberArr[i]]
                    break
                }
            }
        }

        return res
    }

    static fromRoman(str) {
        let res = 0

        let strArr = Object.values(RomanNumerals.numbers).reverse()
        let numberArr = Object.keys(RomanNumerals.numbers).reverse()

        while (str) {
            for (let i = 0; i < strArr.length; i++) {
                if (str.startsWith(strArr[i])) {
                    res += +numberArr[i]
                    str = str.replace(strArr[i], '')
                    break
                }
            }
        }

        return res
    }
}

//console.log(RomanNumerals.toRoman(2008))
//console.log(RomanNumerals.fromRoman('MMVIII'))

var assert = require('assert');
//
describe("RomanNumerals", () => {
    it("Преобразование цифр из римских в арабские и наоборот", () => {
        assert.strictEqual(RomanNumerals.toRoman(1000), 'M');
        assert.strictEqual(RomanNumerals.toRoman(4), 'IV');
        assert.strictEqual(RomanNumerals.toRoman(1), 'I');
        assert.strictEqual(RomanNumerals.toRoman(1990), 'MCMXC');
        assert.strictEqual(RomanNumerals.toRoman(2008), 'MMVIII');

       assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
       assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
        assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
        assert.strictEqual(RomanNumerals.fromRoman('MMVIII'), 2008);
        assert.strictEqual(RomanNumerals.fromRoman('MDCLXVI'), 1666);
    });
});
