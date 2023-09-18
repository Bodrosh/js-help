/*
** Сделать, чтобы по запросу числового проперти его тип был String
*/
const obj = {}
obj.foo = 1

const proxyObj = new Proxy(obj, {
    get(target, p, receiver) {
        return target[p].toString()
    }
})

// Есть 2 отсортированных массива, нужно написать функцию,
// кот. берет все числа из массива ()если повторяются, должны повторяться
// и выдает массив со всеми этими числами

const arrA = [1,3,5,5,6,7,8]
const arrB = [1,3,3,6,7,7,7]

const merge = (a, b) => {
    const res = [...arrA, ...arrB].sort((a,b) => a - b)
    console.log(res)
    console.log([...(new Set(res))])
}

//merge(arrA, arrB)

/*
** Написать свою debounce
*/

const fetchUrl = function(url) {
    console.log(`fetching ${url}...${user.name}`)
}

const user = {
    name: 'Bob'
}

function debounce(callback, delay) {
    let timer = null

    return function (url) {
        // Если уже запущен - чистим
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            callback(url)
        }, delay)
    }
}

const fetching = debounce(fetchUrl.bind(user), 300)

// fetching(1)
// fetching(2)
// fetching(3)
// fetching(4)
// fetching(5) // вызовется только последний


/*
** Итоговый массив из values
*/
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 3}
            ]
        },
        {
            value: 4,
            children: [
                {value: 5},
                {value: 6}
            ]
        },
    ]
}


//Через рекурсию
function getTrrValues(tree) {
    const res = []
    if (tree.value) {
        res.push(tree.value)
    }

    if (tree.children) {
        for (let item of tree.children) {
            res.push(...getTrrValues(item))
        }
    }

    return res
}

// Через стек вызовов - закидываем каждый узел в очередь
function getTrrValues2(tree) {
    const res = []
    const stack = [tree]

    while (stack.length) {
        const node = stack.pop()
        if (node.value) {
            res.push(node.value)
        }
        if (node.children?.length) {
            stack.push(...node.children)
        }
    }

    return res
}

console.log(getTrrValues(tree)) // => [1,2,3,4,5,6]
console.log(getTrrValues2(tree)) // => [1,2,3,4,5,6]


function someFn() {
    try {
        if (Math.random() < 0.5) {
            throw new Error('err')
        }
        return 1
    }
    catch (e) {
        return 2
    }
    finally {
        // вызывается всегда
        return 3
    }
}

console.log(someFn())