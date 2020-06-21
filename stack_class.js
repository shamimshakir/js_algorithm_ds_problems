function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.push = function(item){
    collection.push(item)
  }
  this.pop = function(){
    return collection.pop()
  }
  this.peek = function(){
    return collection[collection.length - 1]
  }
  this.isEmpty = function(){
    return collection.length === 0
  }
  this.clear = function(){
    collection.length = 0
  }
}
