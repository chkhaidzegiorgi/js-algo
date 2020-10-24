# Insertion Sort

![N|Solid](../../../../assets/merge-sort.gif)

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or [merge sort].

Insertion sort works similarly as we sort cards in our hand in a card game.

We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other cards are taken and put at their right place.

A similar approach is used by insertion sort.

Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.

[merge sort](../merge-sort)


![N|Solid](../../../../assets/insertion-sort.png)

# Performance

| Name                  | Best            | Average             | Worst               | Memory    |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: |
| **Insertion sort**    | O(n)            |  О(n^2)             | О(n^2)              | O(1)      |  


## References

- [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)

