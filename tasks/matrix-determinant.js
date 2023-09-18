const m2x2 = (m) => m[0][0] * m[1][1] - m[1][0] * m[0][1]

// Новая матрица без строки и столбца (модуль)
const deltM = (m, j) => {
    const newM = [...m]
    // убираем 1-ю строку
    newM.splice(0, 1)
    // убираем j-й столбец
    return newM.map(ite => ite.filter((it,ind) => ind !== j))
}

function determinant(m) {
    const size = m.length
    if (size === 1) return m[0][0]
    if (size === 2) return m2x2(m)

    let res = 0
    let mult = 1

    for (let i = 0; i < size; i++) {
        res += m[0][i] * determinant(deltM(m, i)) * mult
        mult *= -1
    }

    return res
}