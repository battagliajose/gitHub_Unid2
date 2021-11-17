var textArea = document.querySelector('[name="textArea"]');
var txtCaracteres = document.querySelector('[name="txtCaracteres"]');

console.log(textArea);

textArea.addEventListener("keyup", function() {
    txtCaracteres.value = textArea.textLength
})