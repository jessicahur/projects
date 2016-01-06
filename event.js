var EventEmitter = require('events').EventEmitter;
var util         = require('util');

var id = 1;
var database = {
  users: [
  { id: id++, name: "Joe Smith",  occupation: "developer"},
  { id: id++, name: "Jane Doe",   occupation: "data analyst"}
  ]
};
var users = new UserList();

function UserList(){
  EventEmitter.call(this);
}

util.inherits(UserList, EventEmitter);

UserList.prototype.save = function(obj){
  obj.id = id++;
  database.users.push(obj);
  this.on('user-saved', function(obj){
    console.log("saved: " + obj.name + " (" + obj.id + ")");
  });
}

UserList.prototype.all = function(){
  return database.users;
}

var input = {name: 'Jessica Hur', occupation: 'developer'};
users.save(input);
users.emit('user-saved', input);
