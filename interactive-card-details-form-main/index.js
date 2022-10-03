function myFunction() {
  let cardNumber = document.getElementById("card-number").value;
  document.getElementById("card-number-image").innerHTML = cardNumber;

  if (!isNaN(cardNumber)) {
    cardNumber.split('').join(' ')
  }
}

function maxLengthCheck(object)
{
  if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)
}