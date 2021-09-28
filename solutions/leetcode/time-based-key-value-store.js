/*

Problem

https://leetcode.com/problems/time-based-key-value-store/

Approach
- For each set operation
- If the key does not exist in the store create an array for that key.
- Else push the value and timestamp to the array of the key.
- For each get operation
- Divide the array of the key into two.
- If the mid has a timestamp less than or equal to the given timestamp then mark it as potential result and search on the right subarray.
- Else search on the left subarray.

Set
Time - O(1)
Space - O(n)

Get
Time - O(log(n))
Space - O(n)

n - number of elements

*/

class TimeMap {
    constructor() {
        this.store = {};
    }
    set(key, value, timestamp) {
        if (!this.store[key]) {
            this.store[key] = [];
        }
        this.store[key].push({ value, timestamp });
    }
    get(key, timestamp) {
        const arr = this.store[key];
        if (!arr) {
            return "";
        }
        let start = 0, end = arr.length - 1, result = "";
        while (start <= end) {
            const mid = Math.floor(start + (end - start) / 2);
            if (arr[mid].timestamp <= timestamp) {
                result = arr[mid].value;
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
        return result;
    }
};