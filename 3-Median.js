function findMedian(arr) {
    // Sort the array in ascending order
    arr.sort();
    const length = arr.length;
    const mid = length / 2;
    if (length % 2 === 0) {
        // Even number of elements: average of two middle values
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        // Odd number of elements: middle value
        return arr[mid];
    }
}

// Example usage:
const numbers = [7, 3, 1, 9, 5, 22];
console.log("Median value: ", findMedian(numbers));