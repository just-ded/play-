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

var button = document.getElementById("b1");
button.setAttribute("onclick","move();")
function move () {
    window.location.href = "index3.html"
}