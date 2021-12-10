
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {

    /*
     Alternatively, we can apply Map.
     
     Array 'int_rotated_180_degrees': 
     Strobogrammatic numbers: 0=>0, 1=>1, 6=>9, 8=>8, 9=>6 
     Non-strobogrammatic numbers: 2=>*, 3=>*, 4=>*, 5=>*, 7=>* 
     */
    const int_rotated_180_degrees = ['0', '1', '*', '*', '*', '*', '9', '*', '8', '6'];
    let leftPointer = 0;
    let rightPointer = num.length - 1;

    while (leftPointer <= rightPointer) {

        if (int_rotated_180_degrees[num.charAt(leftPointer) - '0'] === '*') {
            return false;
        }
        if (int_rotated_180_degrees[num.charAt(leftPointer) - '0'] !== num.charAt(rightPointer)) {
            return false;
        }

        leftPointer++;
        rightPointer--;
    }

    return true;
};
