// Bubble Sort
function bubbleSort(arr) {
    if (arr.length == 1) return arr;

    for (var i = 0; i < arr.length; i++) {
        let swapped = false;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            return arr;
        }
    }
    return arr;
}
console.log(bubbleSort([10, 2, 8, 18, 1, 15, 7]));