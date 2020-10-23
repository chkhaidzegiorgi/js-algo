import Sort from '../sort';
import { swap } from '../../../utils/swap/swap';
import { lessThan } from '../../../utils/comparator/comparator';

export default class BubbleSort extends Sort {
    constructor(compareFn = lessThan) {
        super(compareFn);
    }

    sort(originalArray) {
        const array = [...originalArray];
        for (let i = 1; i < array.length; i++) {
            let swapped = false;
            for (let j = 0; j < array.length - i; j++) {
                if (this.compare(array[j + 1], array[j])) {
                    swap(array, j + 1, j);
                    swapped = true;
                }
            }
            if (!swapped) {
                return array;
            }
        }
        return array;
    }
}