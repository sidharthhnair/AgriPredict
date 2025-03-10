function predictPrice(product) {
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;

  if (!month || !year) {
    alert('Please select both month and year.');
    return;
  }

  // Simulate background prediction process
  console.log(`Predicting ${product} price for ${month} ${year}`);

  // You can pass the data to the next page (result.html) using query params or localStorage
  localStorage.setItem('product', product);
  localStorage.setItem('month', month);
  localStorage.setItem('year', year);
  
  // Fake prediction result (you would replace this with your ML model output)
  const predictedPrice = Math.floor(Math.random() * 100 + 100); // Example random price
  localStorage.setItem('predictedPrice', predictedPrice);

  // Navigate to result page
  window.location.href = 'result.html';
}

