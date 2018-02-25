class Sorter {
    constructor() {
        this.arr = [];
        this.customSort = (a, b) => a - b;
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
        indices.sort((a, b) => a - b);
        var new_arr = this.arr.splice(indices[0], indices.length);
        new_arr.sort(this.customSort);
        this.arr.splice(indices[0], 0, ...new_arr);
        console.log(this.arr);
    }

    setComparator(compareFunction) {
        this.customSort = compareFunction;
    }
}

module.exports = Sorter;