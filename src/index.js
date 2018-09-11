class Sorter {
    constructor() {
        this.arr = [];
        this.customSortFunc = function(a, b) {
            return a - b;
        }
        this.customSort = function(arr, indices) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = i; j < arr.length; j++) {
                    if (!indices) {
                        if (this.customSortFunc(arr[i], arr[j])) {
                            var temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    } else {
                        if (indices.indexOf(i) != -1 && indices.indexOf(j) != -1 && this.customSortFunc(arr[i], arr[j]) > 0) {
                            var temp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = temp;
                        }
                    }
                }
            }
            this.arr = arr;
        }
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        this.customSort(this.arr, indices);
    }

    setComparator(compareFunction) {
        this.customSortFunc = compareFunction;
    }
}


module.exports = Sorter;