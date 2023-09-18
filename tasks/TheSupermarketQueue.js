queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12

function queueTime(customers, n) {
    if (n === 1) {
        return customers.reduce((acc, it) => acc + it, 0)
    }
    // Если касс не меньше, чем клиентов, время = долгому клиенту
    if (n >= customers.length) {
        return Math.max(...customers)
    }

    const queueTimes = customers.splice(0, n)

    while (customers.length > 0) {
        // ищем кассу, кот. раньше освободится
        const minSeconds = Math.min(...queueTimes)
        const minIndex = queueTimes.findIndex(it => it === minSeconds)
        // и отправляем в нее следующего клиента
        queueTimes[minIndex] += customers.splice(0, 1)[0]
    }
    // результат - касса, кот. дольше работала - её время
    return Math.max(...queueTimes)
}