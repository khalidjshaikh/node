#!/usr/local/bin/node
// https://nodejs.org/api/cluster.html

const cluster = require('cluster');
const http = require('http');
var numCPUs = require('os').cpus().length;
numCPUs = 1
// console.log(numCPUs)

console.log(`pid: ${process.pid} is running - isMaster: ${cluster.isMaster}`);

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    // Exercise multiply instruction 10 billion times per process
    for(i=0; i<1e10; i++) {
        i*i
    }
}
process.exit()