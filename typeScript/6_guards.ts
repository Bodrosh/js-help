// Обработка в зависимости от типа
function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed()
    }
    return x.trim()
}

/////////////////
// В зависимости от типа разный функционал

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle(res: MyError | MyResponse) {
    if (res instanceof MyResponse) {
        return {
            info: res.result + ' ' + res.header
        }
    }
    return {
        error: res.header + ' ' + res.message
    }
}

//////////
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {}
setAlertType('danger')
setAlertType('success')

//setAlertType('default') // ошибка - не валидно