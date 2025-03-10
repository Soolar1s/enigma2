document.addEventListener('DOMContentLoaded', function() {
    const puzzles = [
        { id: 'answer1', answers: ['flores'] }, 
        { id: 'answer2', answers: ['gelo'] }, 
        { id: 'answer3', answers: ['mania'] }, 
        { id: 'answer4', answers: ['sonho'] },
        { id: 'answer5', answers: ['vazio'] } 
    ];

    function checkAllSolved() {
        const allSolved = puzzles.every(puzzle => {
            const resultDiv = document.querySelector(`#${puzzle.id}`).parentElement.querySelector('.result');
            return !resultDiv.classList.contains('hidden');
        });

        const redirectButton = document.getElementById('redirect');
        if (allSolved) {
            redirectButton.classList.remove('hidden');
        } else {
            redirectButton.classList.add('hidden');
        }
    }

    puzzles.forEach(puzzle => {
        const button = document.querySelector(`button[data-answer="${puzzle.answers[0]}"]`);
        if (button) { 
            button.addEventListener('click', function() {
                const userAnswer = document.getElementById(puzzle.id).value.toLowerCase();
                if (puzzle.answers.includes(userAnswer)) {
                    const resultDiv = button.parentElement.querySelector('.result');
                    resultDiv.classList.remove('hidden');
                    checkAllSolved(); 
                } else {
                    alert('Resposta incorreta. Tente novamente!');
                }
            });
        }
    });

    document.getElementById('redirect').addEventListener('click', function() {
        window.location.href = 'https://soolar1s.github.io/enigma/';
    });
});