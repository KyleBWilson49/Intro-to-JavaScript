function bubbleSort(arr){
  var sorted = false;
  var lower;
  while (!sorted){
    sorted = true;
    for (var i = 0; i < arr.length - 1; i++){
      if (arr[i] > arr[i+1]){
        lower = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = lower;
        sorted = false;
      }
    }
  }
  return arr;
}
//console.log(bubbleSort([1,5,2,6,49,86,4,2,5]));

function subStrings(string){
  var substringArray = []
  for (var start = 0; start < string.length; start++){
    for (var end = start + 1; end <= string.length; end++){
      substringArray.push(string.slice(start,end));
    }
  }
  return substringArray;
}

console.log(subStrings('break'));
