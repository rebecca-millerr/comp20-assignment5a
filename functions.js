
// reads and validates number from document
function readNum(input_id) {
    let value = document.getElementById(input_id).value;
    value = parseFloat(value);
    
    if ( Number.isInteger(value) && value >= 2 )
        return value;
    else if ( value < 2 ) {
        alert('Must input numbers that are 2 or greater.');
        return false;
    }
    else {
        alert('Must input integers. ');
        return false;
    }
}

// prints numbers for debugging
function displayNums(first, second) {
    alert("First number is " + first + "\nSecond number is " 
          + second + "\n");
}

// checks if factor is a factor of num
function isFactor(num, factor) {
    if ( num % factor === 0 )
        return true;
    else
        return false;
}

// prints array of factors
function showFactors(arr) {
    let string = "";

    for ( let i = 0; i < arr.length; i++ )
        string += arr[i] + ' ';

    return string;
}

// sums up elements of array
function addFactors(arr) {
    let sum = 0;

    for ( let i = 0; i < arr.length; i++ )
        sum += arr[i];

    return sum;
}

// adds all known factors to array
function getFactors(num) {
    let factors = new Array();

    for ( let i = 1; i <= num / 2; i++ )
    {
        if ( isFactor(num, i) )
            factors.push(i);
    }

    return factors;
}
