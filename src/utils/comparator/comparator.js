function compare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
}

export function lessThan(a, b) {
    return compare(a, b) < 0;
}