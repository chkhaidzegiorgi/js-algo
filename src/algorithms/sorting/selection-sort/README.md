# Selection Sort

![N|Solid](../../../../assets/selection-sort.gif)

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. 

The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.


The time efficiency of selection sort is quadratic, so there are a number of sorting techniques which have better time complexity than selection sort. 

**One thing which distinguishes selection sort from other sorting algorithms is that it makes the minimum possible number of swaps, n − 1 in the worst case.**


# Performance

| Name                  | Best            | Average             | Worst               | Memory    |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: |
| **Selection sort**    | O(n^2)          |  О(n^2)             | О(n^2)              | O(1)      |  


## References

- [Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)

