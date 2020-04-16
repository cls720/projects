// import Vue from 'vue'
// const Bus = new Vue()

var EventEmitter = require('events').EventEmitter;
var Bus = new EventEmitter();
export default Bus