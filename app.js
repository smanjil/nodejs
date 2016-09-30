
// function printStuff(stuff){
//     console.log(stuff);
// }

// anonymous function
// var printStuff = function(stuff){
//     console.log(stuff);
// }

function mainFunction(anotherFunction, value){
    anotherFunction(value);
}
mainFunction(function(){
    console.log('Manjil');
}, 'World');

