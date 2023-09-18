// Write a function, which takes a non-negative integer (seconds) as input and returns
// the time in a human-readable format (HH:MM:SS)

const divRes = (seconds, div) => {
    return Math.floor(seconds / div).toString()
}

const getFormat = (divRes, isLast = false) => {
    return (divRes.length < 2 ? '0' + divRes : divRes) + (isLast ? '' : ':')
}

function humanReadable (seconds) {
    if (seconds > 359999) return false

    let res = ''

    const hours = divRes(seconds, 60 * 60)
    res += getFormat(hours)

    seconds = seconds - hours * (60 * 60)
    const minutes = divRes(seconds, 60)
    res += getFormat(minutes)

    seconds = (seconds - minutes * 60).toString()
    res += getFormat(seconds, true)

    return res;
}