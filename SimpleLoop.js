var arrayOfNumber = [3, 8, 5, 85,  10, 15];
console.log(arrayMaxValue(arrayOfNumber))

function arrayMaxValue(array) {
    var max = 0;
    for (i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}