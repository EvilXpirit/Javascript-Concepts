// Function that returns a promise that resolves after a given delay
function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  // Display message on the page
  function showMessage(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
  }
  
  // Using promises
  showMessage('Promise');
  delay(2000)
    .then(() => {
      showMessage('After 2 seconds');
      console.log('Message displayed after 2 sec');
    })
    .catch(error => {
      showMessage('Error: ' + error);
    });

  
  // Using async/await
  async function myFunction() {
    showMessage('async/await');
    try {
      await delay(2000);
      showMessage('After 2 seconds');
    } catch (error) {
      showMessage('Error: ' + error);
    }
  }
  // myFunction();
  