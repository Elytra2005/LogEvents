// exporting 
const path = require("path");
const fileLocation = path.join(__dirname, "LogExports.js");


const logModule = require(fileLocation);
const eventEmitter = require("events");

class Emitter extends eventEmitter {
    
}

const myemitter = new Emitter();

myemitter.on('log', (msg) => {
    logModule(msg);
});

setTimeout(() => {
    myemitter.emit('log', 'hello guys')
}, 3000);

