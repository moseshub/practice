function convertFeetToInches() {
        var feetInput = document.getElementById('feetInput').value;
        var feetToInchesResult = feetInput * 12
        alert(`${feetInput} feet is equal to ${feetToInchesResult} inches!`);
    }

    function convertInchesToFeet() {
        var inchesInput = document.getElementById('inchesInput').value;
        var inchesToFeetResult = inchesInput / 12
        alert(`${inchesInput} inches is equal to ${inchesToFeetResult} feet!`);
    }    