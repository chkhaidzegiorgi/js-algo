function compare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
}

export function lessThan(a, b) {
    return compare(a, b) < 0;
}

export function lessThanOrEqual(a, b) {
    return compare(a, b) <= 0;
}

export function lengthLessThan(a, b) {
    return compare(a.length, b.length) < 0;
}

export function lengthLessThanOrEqual(a, b) {
    return compare(a.length, b.length) <= 0;
}