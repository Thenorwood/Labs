function largestSumOfLongestConsecutiveSequence(arr) {
    let longestSequenceLength = 0, largestSequenceSum = 0;
    let currentSequenceLength = 0, currentSequenceSum = 0;
    let lastNum = -Infinity;

    for (let num of arr) {
        if (num === lastNum + 1) {
            // Continue the current sequence
            currentSequenceLength++;
            currentSequenceSum += num;
        } else {
            // New sequence starts, update longest and largest if necessary
            if (currentSequenceLength > longestSequenceLength || 
                (currentSequenceLength === longestSequenceLength && currentSequenceSum > largestSequenceSum)) {
                longestSequenceLength = currentSequenceLength;
                largestSequenceSum = currentSequenceSum;
            }
            // Reset the current sequence
            currentSequenceLength = 1;
            currentSequenceSum = num;
        }
        lastNum = num;
    }

    // Check the last sequence
    if (currentSequenceLength > longestSequenceLength || 
        (currentSequenceLength === longestSequenceLength && currentSequenceSum > largestSequenceSum)) {
        longestSequenceLength = currentSequenceLength;
        largestSequenceSum = currentSequenceSum;
    }

    return largestSequenceSum;
}

// Example usage
const array = [1, 2, 3, 6, 9, 34, 2, 6];
console.log(largestSumOfLongestConsecutiveSequence(array)); // Outputs the largest sum of the longest consecutive sequence

const array1 =   [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
console.log(largestSumOfLongestConsecutiveSequence(array1)); // Outputs the largest sum of the longest consecutive sequence

const array2 =   [100, 101, 102, 3, 4, 5, 6, 9];
console.log(largestSumOfLongestConsecutiveSequence(array2)); // Outputs the largest sum of the longest consecutive sequence
