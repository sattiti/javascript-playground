// add indexOf if not exist.
if(!Array.prototype.indexOf){
  Array.prototype.indexOf = (obj, start)=>{
    let len = this.length;
    for(var i = (start || 0), j = len; i < j; i++){
      if(this[i] === obj) return i;
    }
    return -1;
  }
}
