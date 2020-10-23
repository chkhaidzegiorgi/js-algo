export default class Sort {
    constructor(compareFn) {
        this.compare = compareFn;
    }

    sort() {
        throw new Error('You have to implement the method!');
    }
}