import HoareQuickSort from '../Hoare-Quicksort'
import LomutoQuickSort from '../Lomuto-QuickSort';
import { SortTester } from '../../sort.tester';

describe('QuickSort', () => {

    it('HoareQuickSort should sort array', () => {
        SortTester.testSort(HoareQuickSort);
    });

    it('HoareQuickSort should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(HoareQuickSort);
    });



    it('LomutoQuickSort should sort array', () => {
        SortTester.testSort(LomutoQuickSort);
    });

    it('LomutoQuickSort should sort negative numbers', () => {
        SortTester.testNegativeNumbersSort(LomutoQuickSort);
    });
});