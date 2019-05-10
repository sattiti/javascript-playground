const EventEmitter = require('events').EventEmitter;
const emitter      = new EventEmitter();
const util         = require('util');

// class で使う方法
class ButtonClass extends EventEmitter{
  constructor(color){
    super();
    this.color = color;
  }
  press(){
    console.log('before press');
    this.emit('press', this.color);
    console.log('after press');
  }
};

const btn = new ButtonClass('blue');
btn.on('press', function(color){
  console.log('btn1 pressd');
  console.log(color);
}).press();

// prototype で使う方法
// constructor
const Button1 = function(color){
  this.color = color;
  EventEmitter.call(this);
};

Button1.prototype.press = function(){
  console.log('before press');
  this.emit('press', this.color);
  console.log('after press');
};

// Button1 に EventEmitter を継承させる。
util.inherits(Button1, EventEmitter);

let btn1 = new Button1('red');
btn1.on('press', function(color){
  console.log('btn1 pressd');
  console.log(color);
}).press();

// そのまま使う方法
// event 登録
emitter.on('EVENT1', ()=>{
  console.log('EVENT1_1');
});
emitter.on('EVENT1', ()=>{
  console.log('EVENT1_2');
});
emitter.on('EVENT2', ()=>{
  console.log('EVENT2_1');
});

// trigger
emitter.emit('EVENT_1');
emitter.emit('EVENT_2');
