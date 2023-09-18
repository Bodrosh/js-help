// Сложение чисел в столбик
function add(a, b) {
    let min = a
    let max = b
    if (a.length !== b.length) {
        if (a.length > b.length) {
            min = b
            max = a
        }
        for(let i = 0; i < max.length; i++) {
            if (!min[i]) {
                min = '0' + min
            }
        }
    }

    let sum = ''
    let curMemNumber = ''

    for (let i = max.length - 1; i >= 0; i--) {
        let curSum = (Number(min[i]) + Number(max[i]) + Number(curMemNumber)).toString()
        curMemNumber = ''
        if (curSum.length > 1) {
            curMemNumber = curSum[0]
            sum = curSum[1] + sum
        }
        else {
            sum = curSum + sum
        }

        if (i === 0) {
            sum = curMemNumber + sum
        }

    }

    return sum
}

/*
describe("Add two numbers", function(){
    it("should pass basic tests", function() {
        Test.assertEquals(add("1", "1"), "2");
        Test.assertEquals(add("123", "456"), "579");
        Test.assertEquals(add("888", "222"), "1110");
        Test.assertEquals(add("1372", "69"), "1441");
        Test.assertEquals(add("12", "456"), "468");
        Test.assertEquals(add("101", "100"), "201");
        Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
    });
});