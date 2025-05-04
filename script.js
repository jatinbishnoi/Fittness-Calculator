function calculateCalories(event) {
  event.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const duration = parseFloat(document.getElementById('duration').value);
  const intensity = document.getElementById('intensity').value;
  let multiplier;

  switch (intensity) {
    case 'low': multiplier = 4; break;
    case 'medium': multiplier = 7; break;
    case 'high': multiplier = 10; break;
  }

  const calories = (multiplier * weight * duration) / 60;
  document.getElementById('result').innerText = 
    `You burned approximately ${calories.toFixed(2)} calories.`;
}