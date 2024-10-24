// ----- VAR --------

console.log(x) // undefined because only declaration is moved to the top
var x = 9

test()

var test = function() {
    console.log("function declaration")
}

// ----- LET & CONST --------

console.log(let) // refrence error
let x = 9

test()

let test = function() {
    console.log("function declaration")
}

// --- FUNCTION DECLARATION

test()

function test()
{
 console.log("function declaration")
}