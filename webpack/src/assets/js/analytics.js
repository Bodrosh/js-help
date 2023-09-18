import * as $ from 'jquery'
function analytics() {
    const clickListener = () => params.clickCounter++

    const methods = {
        startClickCounter() {
            //document.addEventListener('click', clickListener)
            $.on('click', clickListener)
            console.log('clickListener start')
        },
        destroyClickCounter() {
            //document.removeEventListener('click', clickListener)
            $.off('click', clickListener)
            console.log('clickListener stop')
        }
    }
    const params = {
        clickCounter: 0,
        methods: methods
    }


    return params
}
window.analytics = analytics()