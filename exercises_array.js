function uniq(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i++) {
    var uniqElement = true;
    for (var j = 0; j < uniqueArray.length ; j++) {
      if (uniqueArray[j] === arr[i]) {
        uniqElement = false;
      }
    }
    if (uniqElement) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

function twoSum(arr){
  var indexArray = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        indexArray.push([i,j]);
      }
    }
  }
  return indexArray;
}

function myTranspose(arr) {
  var transposedArray = [];

  for (var col = 0; col < arr.length; col++) {
    var newRow = [];

    for (var row = 0; row < arr.length; row++) {
      newRow.push(arr[row][col]);
    }

    transposedArray.push(newRow);
  }

  return transposedArray;
}

console.log(myTranspose([[1,2],[3,4]]));
