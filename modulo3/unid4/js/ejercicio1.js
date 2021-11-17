var title= document.querySelector(".titulo");
var boxOne = document.querySelector(".one");
var boxTwo= document.querySelector(".two");
var boxThree = document.querySelector(".three");

boxOne.addEventListener("click", function() {
    document.body.style.background = "red";
    title.style.color = "blue";
})

boxTwo.addEventListener("click", function() {
    document.body.style.background = "blue";
    title.style.color = "red";
})

boxThree.addEventListener("click", function() {
    document.body.style.background = "green";
    title.style.color = "white";
})




