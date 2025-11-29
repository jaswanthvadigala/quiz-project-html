var loginDiv = document.getElementById('login');
var instructionsDiv = document.getElementById('instructions');
var quizDiv = document.getElementById('quiz');
var resultDiv = document.getElementById('result');
var questionContainer = document.getElementById('question-container');
var nextBtn = document.getElementById('next-btn');
var submitBtn = document.getElementById('submit-btn');

var questions = [];
var currentIndex = 0;
var userAnswers = [];

instructionsDiv.style.display = 'none';
quizDiv.style.display = 'none';
resultDiv.style.display = 'none';

document.getElementById('login-btn').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    if (name && password) {
        loginDiv.style.display = 'none';
        instructionsDiv.style.display = 'block';
    } else {
        alert('Please enter name and ID');
    }
});

document.getElementById('start-btn').addEventListener('click', function () {
    instructionsDiv.style.display = 'none';
    quizDiv.style.display = 'block';
    loadQuestions();
});


function loadQuestions() {
    fetch('questions.json').then(function (response) {
        return response.json();
    }).then(function (data) {

        questions = data.sort(function () { return 0.5 - Math.random(); }).slice(0, 15);
        displayQuestion();
    }).catch(function (error) {
        questionContainer.innerHTML = 'Failed to load questions';
        console.error(error);
    });
}

function displayQuestion() {
    var q = questions[currentIndex];
    var html = '';
    html += '<h3>Q' + (currentIndex + 1) + ': ' + q.question + '</h3>';
    html += '<ul>';
    for (var i = 0; i < q.options.length; i++) {
        html += '<li onclick="selectOption(this,' + i + ')">' + q.options[i] + '</li>';
    }
    html += '</ul>';
    questionContainer.innerHTML = html;

    if (currentIndex == questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

function selectOption(element, index) {
    var lis = element.parentNode.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('selected');
    }
    element.classList.add('selected');
    userAnswers[currentIndex] = index;
}

nextBtn.addEventListener('click', function () {
    if (userAnswers[currentIndex] == undefined) {
        alert('Please select an option');
        return;
    }
    currentIndex++;
    displayQuestion();
});

submitBtn.addEventListener('click', function () {
    if (userAnswers[currentIndex] == undefined) {
        alert('Please select an option');
        return;
    }
    quizDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
        if (userAnswers[i] == questions[i].answer) {
            score++;
        }
    }
    document.getElementById('score').innerText = 'Your score is ' + score + ' out of ' + questions.length;
});
