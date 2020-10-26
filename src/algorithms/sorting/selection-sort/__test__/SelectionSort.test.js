import SelectionSort from '../selection-sort'

import {
    SortTester
} from '../../sort.tester';
import { lengthLessThanOrEqual } from '../../../../utils/comparator/comparator';


describe('Merge Sort', () => {

    it('should sort array', () => {
        SortTester.testSort(SelectionSort);
    });

    it('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(SelectionSort);
    });

    it('should do stable sorting', () => {
        const sorter = new SelectionSort(lengthLessThanOrEqual);
        expect(sorter.sort(['bb', 'aa', 'c'])).toEqual(['c', 'bb', 'aa']);
        expect(sorter.sort(['aa', 'q', 'a', 'bbbb', 'ccc'])).toEqual(['a', 'q', 'aa', 'ccc', 'bbbb']);
        expect(sorter.sort([''])).toEqual(['']);
        expect(sorter.sort(['a'])).toEqual(['a']);
        expect(sorter.sort(['aa', 'a'])).toEqual(['a', 'aa']);
        expect(sorter.sort(['aa', 'aa'])).toEqual(['aa', 'aa']);
    });

});