import BubbleSort from '../bubble-sort'
import {
    SortTester
} from '../../sort.tester';


describe('Bubble Sort', () => {
    it('should sort array', () => {
        SortTester.testSort(BubbleSort);
    });

    it('should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(BubbleSort);
    });

    it('should do stable sorting', () => {
        SortTester.testSortStability(BubbleSort);
    });

});