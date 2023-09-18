class Builder {
    build() {
        this.test()
        this.deploy()
    }
    test() {}
    deploy() {}
}

class IosBuilder extends Builder {
    test() {
        console.log('ios тесты')
    }
    deploy() {
        console.log('ios деплой')
    }
}

class AndroidBuilder extends Builder {
    test() {
        console.log('android тесты')
    }
    deploy() {
        console.log('android деплой')
    }
}

const ios = new IosBuilder()
ios.build()

const android = new AndroidBuilder()
android.build()