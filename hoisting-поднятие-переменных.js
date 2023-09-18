// Пример 1
var foo = 1;
function bar() {
    console.log(foo); // undefined
    if (!foo) {
        var foo = 10;
    }
    console.log(foo); // 10
}
bar();

// Т.к. переменные и f-ии "подмаются", будет эквивалентно:
/*var foo
function bar() {
    console.log(foo);
    if (!foo) {
        var foo = 10;
     }
    console.log(foo);
}

foo = 1;
bar();*/

// Пример 2
var a = 1;
function b() {
     a = 10;
     return;
     function a() {}
 }
 b();
 console.log(a); // 1

// эквивалентно
/*var a;
function b() {
    a = 10;
    return;
    function a() {}
}
a = 1;
b();
console.log(a);*/ // 1


for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log('i', i) // i всегда = 10
    }, 0)
}