document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertButton = document.getElementById("convert");
    const resetButton = document.getElementById("reset");

    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
        }
    });

    resetButton.addEventListener("click", function () {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    });
});
