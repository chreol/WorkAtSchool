// console.log('Hey Chreol');
// setTimeout(function(){
//     console.log('5Seconds have been passed')
// }, 5000);

// let time = 0
// setInterval( ()=>{
// time += 3;
// console.log(`${time} seconds have been passed`)
// }, 3000)

// let time = 0
// let timer = setInterval( ()=>{
// time += 3;
// console.log(`${time} seconds have been passed`)
// if (time == 30){
//     clearInterval(timer)
//     }
// }, 3000)

// let time = 0
// let timer = setInterval( ()=>{
// time += 3;
// console.log(`${time} seconds have been passed`)
// if (time == 30){
//     clearInterval(timer)
//     }
// }, 3000)

let time = 0
let timer = setInterval( ()=>{
time += 1;
console.log(`${time} seconds have been passed`)
if (time > 10){
    clearInterval(timer)
    }
}, 1000)


