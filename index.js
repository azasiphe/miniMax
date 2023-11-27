function findMinMax() {
    let inputNumbers = document.getElementById("numbers").value;

    if (!inputNumbers) {
        alert("Please enter numbers.");
        return;
    }

    let numbersArray = inputNumbers.split(",").map(Number);


    numbersArray = numbersArray.filter(value => !isNaN(value));

    if (numbersArray.length === 0) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let minValue = Math.min(...numbersArray);
    let maxValue = Math.max(...numbersArray);

    let resultDiv = document.getElementById("result");
    resultDiv.textContent = `Min Value: ${minValue}, Max Value: ${maxValue}`;
}