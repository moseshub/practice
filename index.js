function convertFtoI() {
        var feetInput = document.getElementsByName('feetUnit')
        var feetToInchesResult = feetInput * 12
        alert(`${feetInput} feet is equal to ${feetToInchesResult} inches!`);
    }

    function convertItoF() {
        var inchesInput = document.getElementsByName('inchesUnit')
        var inchesToFeetResult = inchesInput / 12
        alert(`${inchesInput} feet is equal to ${inchesToFeetResult} feet!`);
    }    
