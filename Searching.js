// 1. How many searches?
// a. 3 steps = 12 --> 11 --> 8
// b. 2 steps = 12 --> 14 --> ? null

//2a. Linear Search
function linearSearch(data, item) {
    let steps = 0;
    for (let i = 0; i < data.length; i++) {
      if (item === data[i]) {
        steps++;
        return i;
      } else {
        throw new Error(`item was not found! It took ${steps} steps`);
      }
    }
  }
  
  //2b. Binary Search
  function binarySearch(array, values, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
  
    if (start > end) {
      return -1;
    }
  
    const newarray = array.sort();
    const index = Math.floor((start + end) / 2);
    const item = newarray[index];
    let steps = 0;
  
    if (item == values) {
      steps++;
      console.log(`it took ${steps} steps.`);
      return steps;
    } else if (item < value) {
      steps++;
      return binarySearch(newarray, value, index + 1, end);
    } else if (item > value) {
      steps++;
      return binarySearch(newarray, values, start, index - 1);
    } else {
      throw new Error(`item was not found. it took ${array.length} steps `);
    }
  }