import Sort from '../sort';
import { lessThan } from '../../../utils/comparator/comparator';

export default class InsertionSort extends Sort {

    constructor(compareFn = lessThan) {
        super(compareFn);
    }

    sort(array) {
        const sortedArray = [...array];
        const { length } = sortedArray;
        for (let i = 1; i < length; i++) {
            const key = sortedArray[i];
            let j = i;
            while (j > 0 && this.compare(key, sortedArray[j - 1])) {
                sortedArray[j] = sortedArray[j - 1];
                j--;
            }
            sortedArray[j] = key;
        }
        return sortedArray;
    }
}