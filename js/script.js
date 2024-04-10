let buttonIndex = 1;

function showLyrics() {
  if (buttonIndex < 8) {
    document.getElementById(`button${buttonIndex}`).classList.remove('active');
    buttonIndex++;
    document.getElementById(`button${buttonIndex}`).classList.add('active');
    if (buttonIndex === 2) {
      document.getElementById('lyrics').style.display = 'block';
    }
  } else {
    alert('All buttons are already visible!');
  }
}

function showNextButton(buttonId) {

  var currentButton = document.getElementById(buttonId);
  
  currentButton.style.display = 'inline-block';
}

function showButtonDiv(buttonId) {

  var currentButton = document.getElementById(buttonId);
  var betweenButton = document.getElementById("centreButton");
  currentButton.style.display = 'inline-block';
  betweenButton.style.display = 'none';
}