function MyEventEmitter(){
  this.events = Object.create(null);
}
MyEventEmitter.prototype = {

  constructor: MyEventEmitter, //make sure that we don't use this property

  on: function(eventName, callback){
    var events = this.events[eventName] || (this.events[eventName] = []);
    events.push(callback);
  },
  off: function(eventName, callback){

  },
  fire: function(eventName){
    // this.events = eventName;
    var events = this.events[eventName] || (this.events[eventName] = []);
    if (!events) return;
    events,forEach( function(){
      callback();
    })
  }
}
