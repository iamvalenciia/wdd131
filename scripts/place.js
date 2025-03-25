// Efficient wind chill calculation
function calculateWindChill(temperature, windSpeed) {
  // Only calculate if conditions are met
  if (temperature <= 10 && windSpeed > 4.8) {
    return (
      13.12 +
      0.6215 * temperature -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temperature * Math.pow(windSpeed, 0.16)
    );
  }
  return null;
}

// Defer parsing and execution
document.addEventListener("DOMContentLoaded", () => {
  const temperature = 27; // in Celsius
  const windSpeed = 8; // km/h

  const temperatureElement = document.getElementById("temperature");
  const windSpeedElement = document.getElementById("wind-speed");
  const windChillElement = document.getElementById("wind-chill");

  temperatureElement.innerHTML = `${temperature}&deg;C`;
  windSpeedElement.innerHTML = `${windSpeed} km/h`;

  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.innerHTML = windChill
    ? `${windChill.toFixed(2)}&deg;C`
    : "N/A";
});
