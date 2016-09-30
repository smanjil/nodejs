
console.log('User 1 made a request!');
setTimeout(callBack, 5000);

console.log('User 2 made a request!');
setTimeout(callBack, 5000);

console.log('User 3 made a request!');
setTimeout(callBack, 5000);

function callBack(){
    console.log('Queried the database and delivered data in 5 secs!');
}