/*************
 ** enum - вспомогательная сущность, обычно для структурирования однотипных элементов
 *************/

enum Membership {
    Standard,
    Premium
}

// Если не указывать доп. ключи, выводит индексы:
const membership = Membership.Premium
const membershipRev = Membership[1]
console.log(membership) // 1
console.log(membershipRev) // Premium

// Если явно указать ключи:
enum Social {
    vk = "vk.com",
    fb = "facebook.com"
}

console.log(Social.vk) // vk.com
