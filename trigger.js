// execute when button clicked (form submitted)
document.getElementById('btn').addEventListener('click', () => {
    
    const num1 = readNum('input1');
    const num2 = readNum('input2');

    // tests, all commented out
    /*if ( num1 && num2 ) {
        displayNums(num1, num2);
        alert('Should print: true false\n');
        alert(isFactor(4, 2));
        alert(isFactor(3, 2));
        alert('Should print: 1 2 5 7 3');
        alert(showFactors([1,2,5,7,3]));
        alert('Should print: 18');
        alert(addFactors([1,2,5,7,3]));
        alert('Should print: 1 2 3 4 6');
        alert(showFactors(getFactors(12)));
    }*/

    if ( num1 && num2 ) {
        let sum1 = addFactors(getFactors(num1));
        let sum2 = addFactors(getFactors(num2));
        let result;

        if ( sum1 === num2 && sum2 === num1 ) {
            result = num1 + ' and ' + num2 + ' are amicable '
                     + 'numbers.\n';
        }
        else {
            result = num1 + ' and ' + num2 + ' are not amicable '
                     + 'numbers.\n';
        }

        alert(result);
    }
});