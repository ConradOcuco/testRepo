// code for celsius to fahrenheit
function convertToFahrenheit() {
      const celsius = parseFloat(document.getElementById('celsius').value);
      if (isNaN(celsius)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
      }
      const fahrenheit = (celsius * 9/5) + 32;
      document.getElementById('result').innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    }
