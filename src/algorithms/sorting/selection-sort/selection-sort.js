import Sort from '../sort';
import { lessThan } from '../../../utils/comparator/comparator';
import { swap } from '../../../utils/swap/swap';

export default class SelectionSort extends Sort {
    constructor(compareFn = lessThan) {
        super(compareFn);
    }

    sort(array) {
        const sortedArray = [...array];
        const { length } = sortedArray;
        for (let i = 0; i < length - 1; i++) {
            const minValueIndex = this.findMinValueIndex(sortedArray, i);
            if (i !== minValueIndex) {
                swap(sortedArray, i, minValueIndex);
            }
        }
        return sortedArray;
    }

    findMinValueIndex(array, startingIndex) {
        let j = startingIndex;
        let minValueIndex = j + 1;
        while (j < array.length) {
            if (this.compare(array[j], array[minValueIndex])) {
                minValueIndex = j;
            }
            j++;
        }
        return minValueIndex;
    }
}