const Skill = function(){};

Skill.prototype.swimming = function(){
  console.log("doSwimming.");
};

const Person = function(name, age){
  this.name = name;
  this.age  = age;
  this.show();
};

Person.prototype = new Skill();

Person.prototype.show = function(){
  console.log("hello");
};

Person.prototype.getName = function(){
  return this.name;
};

// main
var a = new Person("bob", 30);
console.log(a.getName());
a.swimming();