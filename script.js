function convertTemperature() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitOutput = (celsiusInput * 9/5) + 32;
    document.getElementById("output").textContent = "Temperature in Fahrenheit: " + fahrenheitOutput.toFixed(2);
}
