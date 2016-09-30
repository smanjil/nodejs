
console.log(__filename);    // reprsents file being executed
console.log(__dirname);     // represents in which directory is the current file being executed

function printStuff(){
    console.log('This was from setTimeout()');
}
setTimeout(printStuff, 5000);   // calls printStuff() after 5 secs.
setInterval(printStuff, 2000);   // calls printStuff every 2 secs.

