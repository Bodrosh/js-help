decodeMorse = function(morseCode){
    // You can use MORSE_CODE[morse]
    const words = morseCode.trim().split(`   `)
    const res = words.map(word => {
        return word.split(` `).map(symbol => MORSE_CODE[symbol]).join('')
    }).join(` `)

    return res
}