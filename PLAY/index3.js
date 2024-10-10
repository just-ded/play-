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

const choiceButtons = document.querySelectorAll('.choiceButton');
const proceedButton = document.getElementById('next');
choiceButtons.forEach(button => {
    button.addEventListener('click', function() {
        proceedButton.disabled = false;
    });
});

var button = document.getElementById("next");
button.setAttribute("onclick","move();")
function move () {
    window.location.href = "index4.html"
}