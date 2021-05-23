const sValue = document.querySelector(".sValue");
const result = document.querySelector(".result");

sValue.addEventListener("click", () => {

    let inputName = document.getElementById("input1").value;
    let inputPassword = document.getElementById("input2").value;

    alert('Email/Phone: ' + inputName + " , Password " + inputPassword)
});


const notworkings = document.querySelectorAll('.notworking')
notworkings.forEach((button) => {
    button.addEventListener('click', (e) => {
        alert(e.target.innerHTML)
    })
})