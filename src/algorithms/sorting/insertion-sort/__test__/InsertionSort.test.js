import InsertionSort from '../insertion-sort'
import { SortTester } from '../../sort.tester';

describe('Insertion Sort', () => {

    it('should sort array', () => {
        SortTester.testSort(InsertionSort);
    });

    it('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(InsertionSort);
    });

    it('should do stable sorting', () => {
      SortTester.testSortStability(InsertionSort);
    });

});