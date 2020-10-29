import Sort from '../sort';
import { lessThan } from '../../../utils/comparator/comparator';
import { swap } from '../../../utils/swap/swap';

export default class LomutoQuickSort extends Sort {
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
        this.quickSort(array, index + 1, end);
        return array;
    }

    partition(array, start, end) {
        let index = start;
        let value = array[end];

        for (let i = start; i < end; i++) {
            if (lessThan(array[i], value)) {
                swap(array, index, i);
                index++;
            }
        }
        swap(array, index, end);
        return index;
    }
}