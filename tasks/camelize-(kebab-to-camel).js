const camelize = (kebab) => {
    return kebab.split('-')
        .map((i, index) => index > 0 ? i[0].toUpperCase() + i.slice(1) : i)
        .filter(i => i !== '')
        .join('')
}

console.log(camelize("background-color") === 'backgroundColor')
console.log(camelize("list-style-image") === 'listStyleImage')
console.log(camelize("-webkit-transition") === 'WebkitTransition')