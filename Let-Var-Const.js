// Var is functioned scoped - its value can be reassigned or re-declared , if declared outside of function it becomes global scoped

// var x = 90

// function variable(){
//     var y = 60

//     function insider() {
//         var z = 30
//         console.log(x)
//         console.log(y)
//     }
//     insider()
//     console.log(z)
// }

// variable()
// console.log(y) // refrence error 
// let is block scoped - its value can be reassigned 


// let x = 90

// function let(){
//     let y = 60
//     let l = 6
//     function insider() {
//         let z = 30
//         l = 8
//         console.log(x)
//         console.log(y)
//         console.log(l)
//     }
//     insider()
//     console.log(l)
//     console.log(z) // refrence error 
// }

// console.log(x)
// let()
// console.log(y) // refrence error 


function let(){
    const y = 60
    const l = 6
    function insider() {
        const z = 30
        l =  8 // assignment error
        console.log(x)
        console.log(y)
        console.log(l)
    }
    insider()
    console.log(l)
    console.log(z) // refrence error 
}

let()
console.log(y) // refrence error 