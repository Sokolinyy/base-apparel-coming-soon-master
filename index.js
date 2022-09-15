const errorText = document.getElementById("error-text")
const errorIcon = document.getElementById("error-icon")

let button = document.getElementById('button');
if(button){ // if button clicked, call getVal() function
  button.addEventListener('click', function() {
    getVal()
  });
}


function getVal() {
  list = []
  let input = document.querySelector('input')
  // Grab value from input field
  let val = document.querySelector('input').value;
  let char = "@" && "."

  // If in input field does not presented special character
  // show error, such as icon, text, and border-color
  if (!val.includes(char)) { // if not (!) included char
    input.style.borderColor = "hsl(0, 91%, 73%)"

    errorText.style.display = 'block'
    errorIcon.style.display = 'block'
  }
  else {
    list.push("val")
    console.log(val)

    input.style.borderColor = "hsl(0, 23%, 79%)"
    errorText.style.display = 'none'
    errorIcon.style.display = 'none'
  }
}