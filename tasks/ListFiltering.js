// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

const filter_list = (l) => l.filter(i => typeof i === 'number')

// v0
function filter_list1(l) {
    const res = []
    for (let item of l) {
        if (typeof item === 'number') {
            res.push(item)
        }
    }
    return res
}
