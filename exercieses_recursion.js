function range(start, end){
  if (end < start){
    return [];
  }
  var array = [start];
  array = array.concat(range(start + 1, end));

  return array;
}

// console.log(range(1,5));

function sum(array) {
  if (array.length === 0){
    return 0;
  }

  var total = array[0];
  total += sum(array.slice(1));

  return total;
}

// console.log(sum([1,2,3,4]))


function exponentialOne(base, power) {
  if (power === 0) {
    return 1;
  }
  var total = base * exponentialOne(base, power - 1);
  return total;
}

// console.log(exponentialOne(2,6));

function exponentialTwo(base, power) {
  if (power === 0) {
    return 1;
  }
  var total = base;
  if (power % 2 === 0){
    var exp = exponentialTwo(base, power / 2);
    total = exp * exp;
  }
  else {
    var exp2 = exponentialTwo(base, (power - 1) / 2);
    total = exp2 * exp2 * base;
  }
  return total;
}

function fibonacci(n){
  if(n <= 2){
    return [0,1].slice(0,n);
  }
  var fibs = fibonacci(n-1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}
// console.log(fibonacci(5));

function bsearch(array, target){
  if (array.length === 0){
    return null
  }

  var mid = Math.floor(array.length / 2)
  var left = array.slice(0,mid)
  var right = array.slice(mid + 1)

  if (array[mid] === target ){
    return mid
  }
  else if (array[mid] > target){
    return bsearch(left, target)
  }
  else{
    // account for null
    var idx = bsearch(right, target);
    if (idx !== null) {
      return idx + mid + 1;
    }
    else {
      return null;
    }
  }
}

console.log(bsearch([2, 4, 6, 8, 10], 6));
