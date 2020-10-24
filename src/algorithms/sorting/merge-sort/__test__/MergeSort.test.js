import MergeSort from '../merge-sort'

import {
    SortTester
} from '../../sort.tester';
import { lengthLessThanOrEqual } from '../../../../utils/comparator/comparator';


describe('Merge Sort', () => {

    it('should sort array', () => {
        SortTester.testSort(MergeSort);
    });

    it('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(MergeSort);
    });

    it('should do stable sorting', () => {
        const sorter = new MergeSort(lengthLessThanOrEqual);
        expect(sorter.sort(['bb', 'aa', 'c'])).toEqual(['c', 'bb', 'aa']);
        expect(sorter.sort(['aa', 'q', 'a', 'bbbb', 'ccc'])).toEqual(['q', 'a', 'aa', 'ccc', 'bbbb']);
        expect(sorter.sort([''])).toEqual(['']);
        expect(sorter.sort(['a'])).toEqual(['a']);
        expect(sorter.sort(['aa', 'a'])).toEqual(['a', 'aa']);
        expect(sorter.sort(['aa', 'aa'])).toEqual(['aa', 'aa']);
    });

});