var input = prompt("Enter 1 to convert feet to inches or 2 to convert inches to feet!")



    if (input === "1") {
    var feetInput = prompt("Enter the number of feet!")
    var feetToInchesResult = feetInput * 12
    alert(`${feetInput} feet is equal to ${feetToInchesResult} inches!`);
    }
    else if (input === "2") {
        var inchesInput = prompt("Enter the number of inches!")
        var inchesToFeetResult = inchesInput / 12
        alert(`${inchesInput} inches is equal to ${inchesToFeetResult} feet!`);
    } else {
        alert('Invalid input!')
    };
