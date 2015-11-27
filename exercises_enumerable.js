// Array.prototype.myEach = function (callback) {
  // this[0]
// }

function myEach(arr, fun) {
  for (var i = 0; i < arr.length; i++){
    fun(arr[i]);
  }
  return arr;
}

function print(el){
  console.log(el);
}

//myEach([1,2,3,4], console.log);

function myMap(arr, fun){

  var mappedArray = [];

  for (var i = 0; i < arr.length; i++){
    mappedArray.push(fun(arr[i]));
  }
  return mappedArray;
}

function double(el){
  return el + el;
}

function myMap2(arr, fun){
  var mappedArray = [];
  myEach(arr, function(el){
    mappedArray.push(fun(el));
  });
  return mappedArray;
}

// console.log(myMap2([1,2,3,4], double));


function myInject(arr, fun){
  var accumulator = arr[0];
  myEach(arr.slice(1), function (ele) {
    accumulator = fun(accumulator, ele);
  });
  return accumulator;
}

function add(num1, num2) {
  return num1 + num2
}

console.log(myInject([1,2,3,4], add))
