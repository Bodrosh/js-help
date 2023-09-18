/*************
 ** enum - вспомогательная сущность, обычно для структурирования однотипных элементов
 *************/
var Membership;
(function (Membership) {
    Membership[Membership["Standard"] = 0] = "Standard";
    Membership[Membership["Premium"] = 1] = "Premium";
})(Membership || (Membership = {}));
// Если не указывать доп. ключи, выводит индексы:
var membership = Membership.Premium;
var membershipRev = Membership[1];
console.log(membership); // 1
console.log(membershipRev); // Premium
// Если явно указать ключи:
var Social;
(function (Social) {
    Social["vk"] = "vk.com";
    Social["fb"] = "facebook.com";
})(Social || (Social = {}));
console.log(Social.vk); // vk.com
