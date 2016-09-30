/**
 * Created by ano on 9/30/16.
 */

var fs = require('fs');
var readableStream = fs.createReadStream('in.txt');
var writeableStream = fs.createWriteStream('out.txt');

readableStream.pipe(writeableStream);