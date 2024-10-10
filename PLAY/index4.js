function createQuestionMark() {
    const questionMark = document.createElement('div');
    questionMark.classList.add('questionMark');
    questionMark.innerHTML = '?';
    questionMark.style.left = `${Math.random() * 100}vw`;
    document.getElementById('qf').appendChild(questionMark);
    setTimeout(() => {
        questionMark.remove();
    }, 4000);
}
setInterval(createQuestionMark, 500);
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('datePicker');
    const timeInput = document.getElementById('timePicker');
    const submitButton = document.getElementById('submitButton');
    function checkInputs() {
        const dateValue = dateInput.value;
        const timeValue = timeInput.value;
        console.log("Date Value:", dateValue); 
        console.log("Time Value:", timeValue); 
        submitButton.disabled = !(dateValue && timeValue);
    }
    dateInput.addEventListener('input', checkInputs);
    timeInput.addEventListener('input', checkInputs);
    });
var button = document.getElementById("submitButton");
button.setAttribute("onclick","move();")
function move () {
    window.location.href = "index5.html"
}