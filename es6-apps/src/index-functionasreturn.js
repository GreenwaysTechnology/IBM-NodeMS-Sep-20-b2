//function as return

// function counter(){

//     console.log('outer inc')
//     //inner function
//     function inc(){
//          console.log('inner inc')
//     }
//     //call inner function
//     inc()

// }

//return inc 
function counter() {

    console.log('outer inc')
    //inner function
    // function inc(){
    //      console.log('inner inc')
    // }
    // return inc;
    // return function inc() {
    //     console.log('inner inc')
    // }
    return function (a) {
        console.log('inner inc', a)
        return a * 10;
    }

}
let incresult = counter();
let incvalue= incresult(10)
console.log(incvalue)
//simplified version

console.log(counter()(20))


