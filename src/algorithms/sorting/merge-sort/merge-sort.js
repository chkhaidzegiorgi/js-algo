import Sort from '../sort';
import { lessThanOrEqual } from '../../../utils/comparator/comparator';

export default class MergeSort extends Sort {
    constructor(compareFn = lessThanOrEqual) {
        super(compareFn);
    }

    sort(array) {

        if (array.length <= 1) {
            return array;
        }

        const { length } = array;
        const middle = Math.floor(length / 2);
        const leftArray = array.slice(0, middle);
        const rightArray = array.slice(middle, length);

        const leftSortedArray = this.sort(leftArray);
        const rightSortedArray = this.sort(rightArray);
        return this.merge(leftSortedArray, rightSortedArray);
    }

    merge(leftArray, rightArray) {
        let sortedArray = [];

        while (leftArray.length && rightArray.length) {
            if (this.compare(leftArray[0], rightArray[0])) {
                sortedArray.push(leftArray[0]);
                leftArray.shift();
            } else {
                sortedArray.push(rightArray[0]);
                rightArray.shift();
            }
        }

        return sortedArray.concat(leftArray.length ? leftArray : rightArray);
    }

}