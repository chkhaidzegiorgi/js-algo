import Sort from '../sort';
import { lessThan, greaterThan } from '../../../utils/comparator/comparator';
import { swap } from '../../../utils/swap/swap';

export default class HoareQuickSort extends Sort {
    sort(array) {
        const { length } = array;
        return this.quickSort([...array], 0, length - 1);
    }

    quickSort(array, start, end) {
        if (start >= end) {
            return array;
        }
        const index = this.partition(array, start, end);
        this.quickSort(array, start, index - 1);
        this.quickSort(array, index, end);

        return array;
    }

    partition(array, start, end) {
        const value = array[Math.floor((start + end) / 2)];

        while (start <= end) {
            while (lessThan(array[start], value)) {
                start++;
            }
            while (greaterThan(array[end], value)) {
                end--;
            }
            if (start <= end) {
                swap(array, start, end);
                start++;
                end--;
            }
        }
        return start;
    }
}