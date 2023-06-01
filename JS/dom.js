const registration = document.querySelector(".reg")
const add = document.querySelector(".add")
const clearButton = document.querySelector(".clearButton")
const showButton = document.querySelector(".showButton")
const dropDown = document.querySelector(".town")
const error = document.querySelector(".error")
const plates1 = document.querySelector(".plates")

let regNum = registrationNumber()


add.addEventListener("click", function() {
    regNum.regPlates(registration.value);
    localStorage.setItem("plates", JSON.stringify(regNum.getPlates()));
    plates1.innerHTML = ""; // Clear the previous list
    //error.innerHTML = regNum.limitTown()
    
});

showButton.addEventListener("click", function() {
    registration.value = ''
    plates1.innerHTML = ''
    var plates = JSON.parse(localStorage.getItem("plates"));

    plates.forEach(function(plate) {
        if (regNum.regByTown(dropDown.value,plate)){
        const regItem = document.createElement("li");
        regItem.textContent = plate.toUpperCase();
        plates1.appendChild(regItem);
        }
    });
});

clearButton.addEventListener("click",function(){
    localStorage.clear()
    plates1.innerHTML = ''
    registration.value = ''
})