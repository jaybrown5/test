function generateFibonacci(n) {
    const sequence = [];
    first = 0;
    second = 1;
    for (i = 2; i <= n; i++) {
        next = first + second;
        sequence[i] = next;
        first = second;
        second = next;
    }
    return sequence;
}

// Example usage:
const n = 10; // Number of terms
console.log("Fibonacci sequence with ", n, " terms: ", generateFibonacci(n));