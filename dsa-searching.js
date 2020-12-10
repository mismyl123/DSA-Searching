class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
}

const sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

// returns iindex of value searching for
function binarySearch(array, value, start = 0, end = array.length - 1) {
    if (start > end) return -1;

    let index = Math.floor((start + end) / 2);
    let item = array[index];

    if (item === value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
}

console.log(binarySearch(sortedList, 3))