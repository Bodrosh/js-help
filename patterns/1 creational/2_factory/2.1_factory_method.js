//abstract class Master { abstract createProduct()}, от него наследуются другие
class MasterFromJapan {
    createProduct() {
        console.log('do japan product')
    }
}

class MasterFromChina {
    createProduct() {
        console.log('do china product')
    }
}


const master1 = new MasterFromChina()
master1.createProduct()

const master2 = new MasterFromJapan()
master2.createProduct()

