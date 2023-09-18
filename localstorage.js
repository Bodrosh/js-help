// localStorage
// > по объему, чем куки, обычно ~5Мб можно хранить
// куки улетают с запросом на сервер, не совсем безопасно, локалстрорэдж не улетает
// умеет раборать только со строками

const num = 28
localStorage.setItem('key_num', num.toString())
console.log(localStorage.getItem('key_num'))

// удаляем по ключу
localStorage.removeItem('key_num')

// полностью чистим
localStorage.clear()

const person = {
    name: 'Max',
    age: 30
}

localStorage.setItem('key_person', JSON.stringify(person))
const raw = localStorage.getItem('key_person')
const personP = JSON.parse(raw)

console.log(personP)

// Если открыто несколько вкладок в браузере данного сайта,
// событие возникнет в остальных вкладках (не в текущей)
window.addEventListener('storage', event => {
    console.log(event) // есть полезные данные - oldVal, newVal, url и т.д.
})

